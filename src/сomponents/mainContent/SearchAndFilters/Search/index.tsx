import { FC } from 'react'

import styles from './styles.module.scss'

import { IFilters } from '../../../../data/interfaces'

const Search: FC<IFilters> = ({filter, setFilter}) => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder='Search' value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}/>
    </div>
  )
}
export default Search