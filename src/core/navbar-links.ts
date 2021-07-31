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
    path: '/ajustes',
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
    title: 'Añadir',
    path: `/nuevo-gasto`,
    icon: 'post_add',
  },
  {
    title: 'Balance',
    path: `/balance`,
    icon: 'sync_alt',
  },
]
