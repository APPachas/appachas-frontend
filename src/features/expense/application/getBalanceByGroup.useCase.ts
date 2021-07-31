import { inject, injectable } from 'tsyringe'
import { GroupID, TYPES } from '../../../core/types'
import { ExpenseRepository } from '../domain/ports/expense.repository'
import { UseCase } from '../../../utils/useCase'
import { UserBalance } from '../domain/userBalance'

@injectable()
export default class GetBalanceByGroupUseCase implements UseCase<UserBalance[], GroupID> {
  constructor(@inject(TYPES.EXPENSE_REPOSITORY) private expenseRepository: ExpenseRepository) {}

  execute(groupID: GroupID): Promise<UserBalance[]> {
    return this.expenseRepository.getBalance(groupID)
  }
}
