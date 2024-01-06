import { ChangeEvent, KeyboardEvent } from "react"
import { TypeTodoList, filter } from "./types"

export interface IInputField {
  handleKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void
  value: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  title: string
}

export interface IFilters {
  defaultValue?: string
  filter: {sort: string, query: string}
  setFilter: ({sort, query}: filter) => void
}

export interface ITodoList {
  tasks: TypeTodoList[]
  handleDelete:  (itemId: number) => void;
  handleChecked: (itemId: number) => any
}
