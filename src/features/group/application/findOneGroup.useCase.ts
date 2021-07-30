import { inject, injectable } from 'tsyringe'
import { GroupID, TYPES } from '../../../core/types'
import { GroupRepository } from '../domain/ports/group.repository'
import { UseCase } from '../../../utils/useCase'
import Group from '../domain/group'

@injectable()
export default class FindOneGroupUseCase implements UseCase<Group, GroupID> {
  constructor(@inject(TYPES.GROUP_REPOSITORY) private readonly groupRepository: GroupRepository) {}

  execute(id: GroupID): Promise<Group> {
    return this.groupRepository.findOne(id)
  }
}
