import { FC, useEffect, useState } from 'react'
import { GroupRepositoryFactory } from '../application/factory/group.factory'
import FindOneGroupUseCase from '../application/findOneGroup.useCase'
import { useParams } from 'react-router-dom'
import { RouteParams } from '../../../core/routeParams'
import { GroupID } from '../../../core/types'
import styles from '../../../styles/modules/group.module.css'
import featured_image from '../../../assets/group-header/madrid.jpg'

export const GroupHeader: FC = () => {
  const { id } = useParams<RouteParams>()
  const [title, setTitle] = useState<string>('Sin título')

  async function getGroupName(groupID: GroupID) {
    const groupRepository = GroupRepositoryFactory.build()
    await new FindOneGroupUseCase(groupRepository).execute(groupID).then(resolve => {
      setTitle(resolve.name)
    })
  }

  useEffect(() => {
    getGroupName(id)
  }, [id])

  return (
    <div className={styles.header} style={{ backgroundImage: `url(${featured_image})` }}>
      <h1>{title}</h1>
    </div>
  )
}
