import { ExpenseID, UserID } from '../../../core/types'

export interface Expense {
  price: number
  description: string
  paymentDate: Date
  user: UserID
  group: string
  id?: ExpenseID
}
