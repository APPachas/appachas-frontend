import { AuthRepository } from '../../domain/ports/auth.repository'
import { AuthProductionRepository } from '../../infrastructure/repository/auth.repository.production'

export class AuthRepositoryFactory {
  static build(): AuthRepository {
    return new AuthProductionRepository()
  }
}
