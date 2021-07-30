import Group from '../group'
import { GroupID } from '../../../../core/types'
import INewGroup from '../new-group'

export interface GroupRepository {
  create(group: INewGroup): Promise<Group>
  findAll(): Promise<Group[]>
  findOne(groupId: GroupID): Promise<Group>
  delete(groupId: GroupID): Promise<Group>
}
