import { FC, useEffect, useState } from 'react'
import { UserID } from '../../../core/types'
import { UserRepositoryFactory } from '../application/factory/user.factory'
import FindOneUserUseCase from '../application/findOneUser.useCase'

interface Props {
  userId: UserID
}

export const UserInfo: FC<Props> = ({ userId }) => {
  const [username, setUsername] = useState<string>('Anónimo')

  useEffect(() => {
    const salida = async () => {
      const userRepository = UserRepositoryFactory.build()
      await new FindOneUserUseCase(userRepository).execute(userId).then(resolve => {
        setUsername(resolve.name)
      })
    }

    salida()
  }, [userId])

  return <>{username}</>
}
