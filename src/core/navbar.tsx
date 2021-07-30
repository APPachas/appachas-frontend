import { FC, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styles from '../styles/modules/navbar.module.css'
import { generalLinks, groupLinks } from './navbar-links'
import { useLocation } from 'react-router-dom'
import { GroupID } from './types'

interface RouteParams {
  id: GroupID
}

export const Navbar: FC = () => {
  const location = useLocation()
  const { id } = useParams<RouteParams>()
  const [routes, setRoutes] = useState(generalLinks)

  useEffect(() => {
    if (generalLinks.find(element => element.path === location.pathname) !== undefined) {
      setRoutes(generalLinks)
    } else {
      const dynamicLinks = groupLinks.map(link => {
        const updatedLink = { ...link }
        updatedLink.path = `/grupo/${id}${link.path}`
        return updatedLink
      })
      setRoutes(dynamicLinks)
    }
  }, [location.pathname, id])

  return (
    <>
      <nav className={styles.navbar}>
        {routes.map((route, idx) => (
          <NavLink key={idx} to={route.path} activeClassName={styles.active}>
            <div className={styles.icon}>
              <span className="material-icons">{route.icon}</span>
            </div>
            <span className={styles.title}>{route.title}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}
