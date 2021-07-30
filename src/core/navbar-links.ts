import { NavbarLinks } from './types'

export const generalLinks: NavbarLinks[] = [
  {
    title: 'Grupos',
    path: '/grupos/activos',
    icon: 'people_alt',
  },
  {
    title: 'Inactivos',
    path: '/grupos/inactivos',
    icon: 'group_off',
  },
  {
    title: 'Añadir',
    path: '/grupos/nuevo',
    icon: 'group_add',
  },
  {
    title: 'Ajustes',
    path: '/grupo/activos',
    icon: 'manage_accounts',
  },
]

export const groupLinks: NavbarLinks[] = [
  {
    title: 'Gastos',
    path: `/gastos`,
    icon: 'receipt',
  },
  {
    title: 'Balance',
    path: `/balance`,
    icon: 'sync_alt',
  },
]
