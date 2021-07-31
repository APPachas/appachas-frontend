import { UserSignIn } from '../userSignIn'

export interface AuthRepository {
  signIn(signIn: UserSignIn): Promise<Response>
}
