import { FC } from 'react';

import { OPTIONS } from '../../../../data/data';

import styles from './styles.module.scss'

import { IFilters } from '../../../../data/interfaces';

const Filters: FC<IFilters> = ({ defaultValue, filter,  setFilter}) => {
  return (
    <div className={styles.filters_container}>
      <select value={filter.sort} onChange={event => setFilter({...filter, sort: event.target.value})} >
        <option value={defaultValue}>{defaultValue}</option>
        
        {OPTIONS.map(({name, value}) => (
          <option key={value} value={value}>{name}</option>
        ))}

      </select>
    </div>
  )
}
export default Filters;