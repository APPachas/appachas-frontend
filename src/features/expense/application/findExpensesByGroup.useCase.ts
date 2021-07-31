import { inject, injectable } from 'tsyringe'
import { ExpenseRepository } from '../domain/ports/expense.repository'
import { UseCase } from '../../../utils/useCase'
import { GroupID, TYPES } from '../../../core/types'
import { Expense } from '../domain/expense'

@injectable()
export default class FindExpensesByGroupUseCase implements UseCase<Expense[], GroupID> {
  constructor(@inject(TYPES.EXPENSE_REPOSITORY) private expenseRepository: ExpenseRepository) {}

  execute(groupID: GroupID): Promise<Expense[]> {
    return this.expenseRepository.findByGroup(groupID)
  }
}
