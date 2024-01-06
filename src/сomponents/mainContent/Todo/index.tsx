import { KeyboardEvent, useState } from 'react';

//components 
import InputField from './InputField';
import SearchAndFilters from '../SearchAndFilters';
import ToDoList from './ToDoList';

import styles from './styles.module.scss';

import { TypeTodoList } from '../../../data/types';
import useTasks from '../../../data/hooks';


const ToDo = () => {
  // STATES
  const [tasks, setTasks] = useState<TypeTodoList[]>([
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: false},
    {id: 3, title: 'kjdaf todo', completed: false},
    {id: 4, title: 'ssd todo', completed: false},
    {id: 5, title: 'asd todo', completed: false},
    {id: 6, title: '7845 todo', completed: false},
  ])
  const [value, setValue] = useState('')
  const isTaskInList = tasks.some(({title}) => {
    return title.trim() == value.trim()
  })
  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedAndSearchedTasks = useTasks(tasks, filter.sort, filter.query)
  
// FUNCTIONS
  const handleChecked = (itemId: number) => {
    const updatedArr = tasks.map((task) => {
      if (task.id == itemId) {
        task.completed = !task.completed
      } return task 
    })
    setTasks(updatedArr)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement> ) => {
    if (event.key == 'Enter' && value.trim() !== '') {
      if(!isTaskInList){
        const newTask = {
          id: Number(Date.now()),
          title: value,
          completed: false,
        }
        setTasks(prev => [...prev, newTask])
      }
      setValue('')
    }
  }
 
  const handleDelete = (itemId: number)  => {
    const filteredList = tasks.filter(({id}) => (itemId !== id))
    setTasks(filteredList)
  }




  // RETURN
  return (
    <div className={styles.toDo}>
      <InputField  // Input field to add new Task
        title = 'Todo' 
        handleKeyPress = {handleKeyPress} 
        value={value} 
        handleChange={(event) => setValue(event.target.value)}
      />

      <SearchAndFilters // Search and sort fields
        filter = {filter}
        setFilter = {setFilter}
      />

      <ToDoList // Your Tasks
        tasks = {sortedAndSearchedTasks} 
        handleDelete = {handleDelete} 
        handleChecked = {handleChecked} 
      />

      
    </div>
  )
}
export default ToDo