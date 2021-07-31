import { FC, useEffect, useState } from 'react'
import styles from '../../../styles/modules/expenses-total.module.css'
import { useParams } from 'react-router-dom'
import { RouteParams } from '../../../core/routeParams'
import { GroupID } from '../../../core/types'
import { ExpenseRepositoryFactory } from '../application/factory/expense.factory'
import FindExpensesByGroupUseCase from '../application/findExpensesByGroup.useCase'

export const TotalCard: FC = () => {
  const { id } = useParams<RouteParams>()
  const [total, setTotal] = useState<number>(0)

  async function getExpenses(groupID: GroupID) {
    const expensesRepository = ExpenseRepositoryFactory.build()
    return await new FindExpensesByGroupUseCase(expensesRepository).execute(groupID)
  }

  useEffect(() => {
    const getTotal = async () => {
      const expenses = await getExpenses(id)
      const calculatedTotal = expenses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
      }, 0)
      setTotal(calculatedTotal)
    }
    getTotal()
  }, [id])

  return (
    <div className={`${styles.total} card-dark`}>
      <div className={'card-content'}>
        <span>Total</span>
        <span>{total}€</span>
      </div>
    </div>
  )
}
