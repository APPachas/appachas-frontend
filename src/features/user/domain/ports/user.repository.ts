import User from '../user'
import { UserID } from '../../../../core/types'
import { UserSignUp } from '../userSignUp'

export interface UserRepository {
  findOne(id: UserID): Promise<User>
  signUp(signUp: UserSignUp): Promise<boolean>
}
