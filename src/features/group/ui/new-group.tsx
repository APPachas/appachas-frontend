import { FC } from 'react'
import { Form, Formik } from 'formik'
import { FormikInput } from '../../../core/form/form-fields'
import INewGroup from '../domain/new-group'
import { GroupRepositoryFactory } from '../application/factory/group.factory'
import CreateGroupUseCase from '../application/createGroup.useCase'

export const NewGroup: FC = () => {
  const initialValues: INewGroup = {
    name: '',
  }
  async function createGroup(newGroup: INewGroup) {
    const groupRepository = GroupRepositoryFactory.build()
    await new CreateGroupUseCase(groupRepository).execute(newGroup)
  }

  return (
    <section id={'layout'}>
      <Formik initialValues={initialValues} onSubmit={createGroup}>
        <Form>
          <div className="card">
            <div className="card-content">
              <FormikInput
                label="Título de nuevo grupo"
                name="name"
                type="text"
                placeholder="Nuevo grupo"
                required
              />
            </div>
            <div className="card-footer">
              <button className={'btn'} type="submit">
                <span className="material-icons">add_circle</span>
                <span>Añadir grupo</span>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  )
}
