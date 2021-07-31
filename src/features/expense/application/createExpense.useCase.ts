import { inject, injectable } from 'tsyringe'
import { ExpenseRepository } from '../domain/ports/expense.repository'
import { UseCase } from '../../../utils/useCase'
import { TYPES } from '../../../core/types'
import { Expense } from '../domain/expense'

@injectable()
export default class CreateExpenseUseCase implements UseCase<Expense, Expense> {
  constructor(@inject(TYPES.EXPENSE_REPOSITORY) private expenseRepository: ExpenseRepository) {}

  execute(expense: Expense): Promise<Expense> {
    return this.expenseRepository.create(expense)
  }
}
