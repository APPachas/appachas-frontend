import { injectable } from 'tsyringe'
import { AuthRepository } from '../../domain/ports/auth.repository'
import { UserSignIn } from '../../domain/userSignIn'

@injectable()
export class AuthProductionRepository implements AuthRepository {
  api_endpoint = process.env.REACT_APP_API_REST + '/auth/'

  async signIn(userSignIn: UserSignIn): Promise<Response> {
    return await fetch(this.api_endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify(userSignIn),
    }).then(response => response)
  }
}
