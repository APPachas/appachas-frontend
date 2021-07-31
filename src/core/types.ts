export type NavbarLinks = {
  title: string
  path: string
  icon: string
}

export type ID = string
export type GroupID = string
export type UserID = string
export type ExpenseID = string

export const TYPES = {
  AUTH_REPOSITORY: Symbol('AUTH_REPOSITORY'),
  GROUP_REPOSITORY: Symbol('GROUP_REPOSITORY'),
  EXPENSE_REPOSITORY: Symbol('EXPENSE_REPOSITORY'),
  USER_REPOSITORY: Symbol('USER_REPOSITORY'),
}
