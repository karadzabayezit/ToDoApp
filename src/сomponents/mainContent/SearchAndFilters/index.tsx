import { FC } from 'react';
import Search from '../SearchAndFilters/Search';
import Filters from '../SearchAndFilters/Filters';

import styles from './styles.module.scss'

import { IFilters } from '../../../data/interfaces';

const SearchAndFilters: FC<IFilters>= ({filter, setFilter}) => {
  return (
    <div className={styles.searchFiltersContainer}>  
      <Search filter={filter} setFilter={setFilter}/>
      <Filters
        filter={filter}
        setFilter = {setFilter}
        defaultValue='Sort' 
      />
    </div>
  )
}
export default SearchAndFilters