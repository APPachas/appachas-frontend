import { injectable } from 'tsyringe'
import { UserID } from '../../../../core/types'
import { UserRepository } from '../../domain/ports/user.repository'
import User from '../../domain/user'
import { UserSignUp } from '../../domain/userSignUp'

@injectable()
export class UserProductionRepository implements UserRepository {
  api_endpoint = process.env.REACT_APP_API_REST + '/users'

  async findOne(userId: UserID): Promise<User> {
    return await fetch(`${this.api_endpoint}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(response => response.json())
  }

  async signUp(userSignUp: UserSignUp): Promise<boolean> {
    return await fetch(this.api_endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(userSignUp),
    }).then(response => response.json())
  }
}
