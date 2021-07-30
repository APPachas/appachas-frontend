import { inject, injectable } from 'tsyringe'
import { TYPES } from '../../../core/types'
import { GroupRepository } from '../domain/ports/group.repository'
import { UseCase } from '../../../utils/useCase'
import Group from '../domain/group'
import INewGroup from '../domain/new-group'

@injectable()
export default class CreateGroupUseCase implements UseCase<Group, INewGroup> {
  constructor(@inject(TYPES.GROUP_REPOSITORY) private readonly groupRepository: GroupRepository) {}

  execute(group: INewGroup): Promise<Group> {
    return this.groupRepository.create(group)
  }
}
