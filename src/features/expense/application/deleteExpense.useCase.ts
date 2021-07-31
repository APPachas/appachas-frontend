import { inject, injectable } from 'tsyringe'
import { ExpenseRepository } from '../domain/ports/expense.repository'
import { UseCase } from '../../../utils/useCase'
import { ExpenseID, TYPES } from '../../../core/types'
import { Expense } from '../domain/expense'

@injectable()
export default class DeleteExpenseUseCase implements UseCase<Expense, ExpenseID> {
  constructor(@inject(TYPES.EXPENSE_REPOSITORY) private expenseRepository: ExpenseRepository) {}

  execute(expenseID: ExpenseID): Promise<Expense> {
    return this.expenseRepository.delete(expenseID)
  }
}
