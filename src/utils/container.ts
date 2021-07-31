import { container } from 'tsyringe'
import { TYPES } from '../core/types'
import { AuthRepository } from '../features/auth/domain/ports/auth.repository'
import { AuthProductionRepository } from '../features/auth/infrastructure/repository/auth.repository.production'

const isOnline = true

if (isOnline) {
  container.registerSingleton<AuthRepository>(TYPES.AUTH_REPOSITORY, AuthProductionRepository)
}

export { container }
