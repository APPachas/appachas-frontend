import { GroupID, UserID } from '../../../core/types'

export default interface Group {
  name: string
  isClosed: boolean
  users: UserID[]
  id?: GroupID
}
