import { FC, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ExpenseRepositoryFactory } from '../application/factory/expense.factory'
import FindExpensesByGroupUseCase from '../application/findExpensesByGroup.useCase'
import { RouteParams } from '../../../core/routeParams'
import { GroupID } from '../../../core/types'
import styles from '../../../styles/modules/expenses.module.css'
import { UserInfo } from '../../user/ui/user-info'
import { Expense } from '../domain/expense'

export const Expenses: FC = () => {
  const { id } = useParams<RouteParams>()
  const [expenses, setExpenses] = useState<Expense[]>([])

  useEffect(() => {
    const getExpenses = async (groupID: GroupID) => {
      const expensesRepository = ExpenseRepositoryFactory.build()
      await new FindExpensesByGroupUseCase(expensesRepository).execute(groupID).then(resolve => {
        setExpenses(resolve)
      })
    }
    getExpenses(id)
  }, [id])

  return (
    <section id={'layout-group'}>
      <ul>
        {expenses.map(expense => (
          <li className={'card'} key={expense.id}>
            <NavLink
              to={`/grupo/${id}/gastos/${expense.id}`}
              className={`${styles.info} card-content`}
            >
              <div>
                <p>{expense.description}</p>
                <p>
                  {new Intl.NumberFormat('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(expense.price)}
                </p>
              </div>
              <div>
                <UserInfo userId={expense.user} />
                <p>
                  {new Intl.DateTimeFormat('es-ES', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  }).format(new Date(expense.paymentDate))}
                </p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
