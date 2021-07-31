import { inject, injectable } from 'tsyringe'
import { TYPES, UserID } from '../../../core/types'
import { UseCase } from '../../../utils/useCase'
import { UserRepository } from '../domain/ports/user.repository'
import User from '../domain/user'

@injectable()
export default class FindOneUserUseCase implements UseCase<User, UserID> {
  constructor(@inject(TYPES.USER_REPOSITORY) private readonly userRepository: UserRepository) {}

  execute(id: UserID): Promise<User> {
    return this.userRepository.findOne(id)
  }
}
