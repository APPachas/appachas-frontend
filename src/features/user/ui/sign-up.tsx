import { FC } from 'react'
import { Form, Formik } from 'formik'
import { FormikInput } from '../../../core/form/form-fields'
import { UserSignUp } from '../domain/userSignUp'
import { UserRepositoryFactory } from '../application/factory/user.factory'
import { SignUpUseCase } from '../application/signUp.useCase'
import { NavLink } from 'react-router-dom'

export const SignUp: FC = () => {
  const initialValues: UserSignUp = {
    name: '',
    email: '',
    password: '',
  }

  async function signUp(userSignUp: UserSignUp) {
    const userRepository = UserRepositoryFactory.build()
    await new SignUpUseCase(userRepository).execute(userSignUp)
  }

  return (
    <section id={'layout'}>
      <h3 className={'text-center'}>Registrarse</h3>
      <Formik initialValues={initialValues} onSubmit={signUp}>
        <Form>
          <div className="card">
            <div className="card-content">
              <FormikInput label="Nombre" name="name" type="text" placeholder="Nombre" />
              <FormikInput label="Email" name="email" type="email" placeholder="Email" />
              <FormikInput
                label="Contraseña"
                name="password"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="card-footer">
              <button className={'btn'} type="submit">
                <span className="material-icons">thumb_up</span>
                <span>Crear cuenta</span>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
      <NavLink className={'related-link'} to={'/login'}>
        ¿Ya estás registrado? Iniciar sesión
      </NavLink>
    </section>
  )
}
