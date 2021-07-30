import { inject, injectable } from 'tsyringe'
import { UseCase } from '../../../utils/useCase'
import { TYPES } from '../../../core/types'
import { AuthRepository } from '../domain/ports/auth.repository'
import { UserSignIn } from '../domain/userSignIn'

@injectable()
export class SignInUseCase implements UseCase<boolean, UserSignIn> {
  constructor(@inject(TYPES.AUTH_REPOSITORY) private readonly authRepository: AuthRepository) {}

  execute(userSignIn: UserSignIn): Promise<boolean> {
    return this.authRepository.signIn(userSignIn)
  }
}
