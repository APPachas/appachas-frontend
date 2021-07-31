import { FC, useEffect, useState } from 'react'
import { GroupID } from '../../../core/types'
import { ExpenseRepositoryFactory } from '../application/factory/expense.factory'
import GetBalanceByGroupUseCase from '../application/getBalanceByGroup.useCase'
import { RouteParams } from '../../../core/routeParams'
import { useParams } from 'react-router-dom'
import { UserBalance } from '../domain/userBalance'
import styles from '../../../styles/modules/pie-chart.module.css'

export const Balance: FC = () => {
  const { id } = useParams<RouteParams>()
  const [balances, setBalances] = useState<UserBalance[]>([])

  useEffect(() => {
    const getBalances = async (groupID: GroupID) => {
      const expensesRepository = ExpenseRepositoryFactory.build()
      await new GetBalanceByGroupUseCase(expensesRepository).execute(groupID).then(resolve => {
        setBalances(resolve)
      })
    }
    getBalances(id)
  }, [id])

  return (
    <section id={'layout-group'}>
      <div className={'box'}>
        <ul className={styles.balance}>
          {balances.map(balance => (
            <li className={''} key={balance.id}>
              <div className={balance.balance >= 0 ? styles.positive : styles.negative}>
                <div className={styles.pie} data-balance={balance.balance}>
                  <div>
                    <p>{balance.name}</p>
                    <p>
                      {new Intl.NumberFormat('es-ES', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(balance.balance)}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
