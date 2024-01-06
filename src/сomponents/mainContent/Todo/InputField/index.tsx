import { FC } from "react"
import styles from './styles.module.scss'
import { IInputField } from "../../../../data/interfaces";

const InputField: FC<IInputField> = ({title, handleKeyPress, value, handleChange}) => {

  return (
    <div className={styles.input_field}>
      <h1>{title}</h1>
      <input className={styles.input} onKeyDown = {handleKeyPress} value = {value} onChange = {handleChange} placeholder="New Task"/>
    </div>
  )
}
export default InputField;