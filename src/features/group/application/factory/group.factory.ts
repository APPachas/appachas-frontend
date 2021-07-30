import { GroupRepository } from '../../domain/ports/group.repository'
import { GroupProductionRepository } from '../../infrastructure/group.repository.production'

export class GroupRepositoryFactory {
  static build(): GroupRepository {
    return new GroupProductionRepository()
  }
}
