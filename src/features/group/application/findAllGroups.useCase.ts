import { inject, injectable } from 'tsyringe'
import { TYPES } from '../../../core/types'
import { GroupRepository } from '../domain/ports/group.repository'
import { UseCase } from '../../../utils/useCase'
import Group from '../domain/group'

@injectable()
export default class FindAllGroupsUseCase implements UseCase<Group[], void> {
  constructor(@inject(TYPES.GROUP_REPOSITORY) private readonly groupRepository: GroupRepository) {}

  execute(): Promise<Group[]> {
    return this.groupRepository.findAll()
  }
}
