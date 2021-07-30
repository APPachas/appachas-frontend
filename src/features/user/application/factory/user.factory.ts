import { UserRepository } from '../../domain/ports/user.repository'
import { UserProductionRepository } from '../../infrastructure/repository/user.repository.production'

export class UserRepositoryFactory {
  static build(): UserRepository {
    return new UserProductionRepository()
  }
}
