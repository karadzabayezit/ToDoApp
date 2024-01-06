import { useMemo } from "react"
import { TypeTodoList } from "../types"

const useSortedTasks = (tasks: TypeTodoList[], sort:string) => {
  const sortedTasks = useMemo(() => { // Hashing? to get more performance
    if(sort == '' || sort == 'Sort') { // To return primary list
      return [...tasks]
    }
    else if (sort == 'title'){ // Sorting by title
      return [...tasks].sort((task1, task2) => task1.title.localeCompare(task2.title))
    } 
    else {  // Sorting by status ( completed or not)     
      return [...tasks].sort((task1, task2) => (task1.completed === task2.completed)? 0 : task1.completed? -1 : 1)
    }
  }, [sort, tasks])
  return sortedTasks
}

const useTasks = (tasks: TypeTodoList[], sort:string, query:string) => {
  const sortedTasks = useSortedTasks(tasks, sort)

  const sortedAndSearchedTasks = useMemo(() => { // Search engine
    return sortedTasks.filter(task => task.title.toLowerCase().includes(query))
  }, [query, sortedTasks])

  return sortedAndSearchedTasks
}

export default useTasks