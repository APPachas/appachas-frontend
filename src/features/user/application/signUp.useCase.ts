import { inject, injectable } from 'tsyringe'
import { UseCase } from '../../../utils/useCase'
import { TYPES } from '../../../core/types'
import { UserSignUp } from '../domain/userSignUp'
import { UserRepository } from '../domain/ports/user.repository'

@injectable()
export class SignUpUseCase implements UseCase<boolean, UserSignUp> {
  constructor(@inject(TYPES.AUTH_REPOSITORY) private readonly userRepository: UserRepository) {}

  execute(userSignUp: UserSignUp): Promise<boolean> {
    return this.userRepository.signUp(userSignUp)
  }
}
