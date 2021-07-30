import { injectable } from 'tsyringe'
import { ExpenseRepository } from '../../domain/ports/expense.repository'
import { GroupID } from '../../../../core/types'

import { UserBalance } from '../../domain/userBalance'
import { Expense } from '../../domain/expense'

@injectable()
export class ExpenseProductionRepository implements ExpenseRepository {
  api_endpoint = process.env.REACT_APP_API_REST + '/expenses'

  async findByGroup(groupID: GroupID): Promise<Expense[]> {
    return await fetch(`${this.api_endpoint}?group=${groupID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(response => response.json())
  }

  async getBalance(groupID: GroupID): Promise<UserBalance[]> {
    return await fetch(`${this.api_endpoint}/balance?group=${groupID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(response => response.json())
  }
}
