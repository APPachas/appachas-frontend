import { FC, useEffect, useState } from 'react'
import FindAllGroupsUseCase from '../application/findAllGroups.useCase'
import { GroupRepositoryFactory } from '../application/factory/group.factory'
import Group from '../domain/group'
import { NavLink } from 'react-router-dom'
import styles from '../../../styles/modules/group.module.css'

export const Groups: FC = () => {
  const [groups, setGroups] = useState<Group[]>([])

  async function findAllGroups() {
    const groupRepository = GroupRepositoryFactory.build()
    await new FindAllGroupsUseCase(groupRepository).execute().then(resolve => {
      setGroups(resolve)
    })
  }

  useEffect(() => {
    findAllGroups()
  }, [])

  return (
    <section id={'layout'}>
      <ul>
        {groups.map(group => (
          <li key={group.id} className={'card'}>
            <NavLink to={`/grupo/${group.id}/gastos`} className={styles.group}>
              {group.name}
              <span className="material-icons">navigate_next</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
