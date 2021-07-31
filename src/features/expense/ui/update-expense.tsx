import { FC } from 'react'
import { ExpenseRepositoryFactory } from '../application/factory/expense.factory'
import DeleteExpenseUseCase from '../application/deleteExpense.useCase'
import { useParams } from 'react-router-dom'
import { RouteParams } from '../../../core/routeParams'

export const UpdateExpense: FC = () => {
  const { expenseId } = useParams<RouteParams>()

  const deleteExpense = async () => {
    const expenseRepository = ExpenseRepositoryFactory.build()
    await new DeleteExpenseUseCase(expenseRepository).execute(expenseId)
  }

  return (
    <section id={'layout-boxed'}>
      <button className={'btn btn-danger'} type="button" onClick={deleteExpense}>
        <span className="material-icons">add_circle</span>
        <span>Eliminar gasto</span>
      </button>
      <div className={'card-content'}>Edición de gastos próximamente</div>
    </section>
  )
}
