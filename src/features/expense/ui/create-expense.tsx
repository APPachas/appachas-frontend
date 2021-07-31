import { FC } from 'react'
import { Form, Formik } from 'formik'
import { FormikInput, FormikSelect } from '../../../core/form/form-fields'
import { Expense } from '../domain/expense'
import CreateExpenseUseCase from '../application/createExpense.useCase'
import { ExpenseRepositoryFactory } from '../application/factory/expense.factory'
import { useParams } from 'react-router-dom'
import { RouteParams } from '../../../core/routeParams'

export const CreateExpense: FC = () => {
  const { id } = useParams<RouteParams>()

  const initialValues: Expense = {
    description: '',
    price: 0,
    user: '6102f91216135725e7da5314',
    group: id,
    paymentDate: new Date(),
  }
  async function createExpense(newExpense: Expense) {
    const expenseRepository = ExpenseRepositoryFactory.build()
    await new CreateExpenseUseCase(expenseRepository).execute(newExpense)
  }
  return (
    <section id={'layout'}>
      <Formik initialValues={initialValues} onSubmit={createExpense}>
        <Form>
          <div className="card">
            <div className="card-content">
              <FormikInput
                label="Descripción"
                name="description"
                type="text"
                placeholder="Nuevo grupo"
                required
              />
              <FormikInput
                label="Coste"
                name="price"
                type="number"
                placeholder="Nuevo grupo"
                required
              />
              <FormikSelect
                label="Asignar a..."
                name="user"
                type="text"
                placeholder="Asignar a..."
                required
              >
                <option value="6102f91216135725e7da5314">1</option>
                <option value="6102f91216135725e7da5314">2</option>
                <option value="6102f91216135725e7da5314">3</option>
              </FormikSelect>
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
