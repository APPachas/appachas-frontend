import { FC } from 'react'
import { Form, Formik } from 'formik'
import { FormikInput } from '../../../core/form/form-fields'
import { UserSignIn } from '../domain/userSignIn'
import { SignInUseCase } from '../application/signin.useCase'
import { AuthRepositoryFactory } from '../application/factory/auth.factory'
import { NavLink } from 'react-router-dom'

export const SignIn: FC = () => {
  const initialValues: UserSignIn = {
    email: 'alejandro2@appochas.com',
    password: '12345678',
  }
  async function signIn(userSignIn: UserSignIn) {
    const authRepository = AuthRepositoryFactory.build()
    await new SignInUseCase(authRepository).execute(userSignIn)
  }
  return (
    <section id={'layout'}>
      <h3 className={'text-center'}>Iniciar sesión</h3>
      <Formik initialValues={initialValues} onSubmit={signIn}>
        <Form>
          <div className="card">
            <div className="card-content">
              <FormikInput label="Usuario" name="email" type="text" placeholder="Usuario" />
              <FormikInput
                label="Contraseña"
                name="password"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="card-footer">
              <button className={'btn'} type="submit">
                <span className="material-icons">lock_open</span>
                <span>Iniciar sesión</span>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
      <NavLink className={'related-link'} to={'/registrar'}>
        ¿No tienes cuenta? Regítrate
      </NavLink>
    </section>
  )
}
