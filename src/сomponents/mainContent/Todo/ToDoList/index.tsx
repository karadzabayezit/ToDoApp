import { FC } from "react";
import styles from './styles.module.scss'

import { ITodoList } from "../../../../data/interfaces";

const ToDoList: FC<ITodoList> = ({handleDelete, tasks, handleChecked}) => {

  if (!tasks.length) {
    return (
      <h2>There is no tasks</h2>
    )
  }

  return (
    <ul className={styles.toDoList}>
      {tasks.map(({id, title, completed}) => (
        <li className={styles.li} key = {id}>
          <input id={`${'input' + id}`}
            className='checkbox' 
            type="checkbox"
            checked={completed}
            onChange={() => handleChecked(id)}
            />
          <label htmlFor={`${'input' + id}`} >
            {title}
            </label>
    
          <i className={styles.i_1} onClick={() => handleDelete(id)}>delete</i>
        </li>
      ))}
    </ul>
  )
}

export default ToDoList