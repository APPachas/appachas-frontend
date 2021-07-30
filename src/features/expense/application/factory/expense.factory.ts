import { ExpenseRepository } from '../../domain/ports/expense.repository'
import { ExpenseProductionRepository } from '../../infrastructure/repository/expense.repository.production'

export class ExpenseRepositoryFactory {
  static build(): ExpenseRepository {
    return new ExpenseProductionRepository()
  }
}
