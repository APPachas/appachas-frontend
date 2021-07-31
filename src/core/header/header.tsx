import { FC } from 'react'
import styles from '../../styles/modules/header.module.css'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <NavLink to={'/grupos/activos'} className="material-icons">
        navigate_before
      </NavLink>
      <span className={styles.logo}>
        <img src={logo} alt="" />
      </span>
      <span className="material-icons">logout</span>
    </header>
  )
}
