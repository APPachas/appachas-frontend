import { GroupID } from '../../../../core/types'
import { UserBalance } from '../userBalance'
import { Expense } from '../expense'

export interface ExpenseRepository {
  findByGroup(groupID: GroupID): Promise<Expense[]>
  getBalance(groupID: GroupID): Promise<UserBalance[]>
}
