import { ExpenseID, GroupID } from '../../../../core/types'
import { UserBalance } from '../userBalance'
import { Expense } from '../expense'

export interface ExpenseRepository {
  create(expense: Expense): Promise<Expense>
  findByGroup(groupID: GroupID): Promise<Expense[]>
  update(id: ExpenseID, expense: Expense): Promise<Expense>
  delete(id: ExpenseID): Promise<Expense>
  getBalance(groupID: GroupID): Promise<UserBalance[]>
}
