import { injectable } from 'tsyringe'
import { GroupRepository } from '../domain/ports/group.repository'
import Group from '../domain/group'
import { GroupID } from '../../../core/types'
import INewGroup from '../domain/new-group'

@injectable()
export class GroupProductionRepository implements GroupRepository {
  api_endpoint = process.env.REACT_APP_API_REST + '/groups'

  async create(group: INewGroup): Promise<Group> {
    return await fetch(this.api_endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(group),
    }).then(response => response.json())
  }

  async findAll(): Promise<Group[]> {
    return await fetch(this.api_endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(response => response.json())
  }

  async findOne(id: GroupID): Promise<Group> {
    return await fetch(`${this.api_endpoint}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(response => response.json())
  }

  async delete(groupId: GroupID): Promise<Group> {
    return await fetch(`${this.api_endpoint}/${groupId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(response => response.json())
  }
}
