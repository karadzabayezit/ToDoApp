import styles from './styles.module.scss'
import ToDo from './Todo'

function MainContent () {

  return (
    <div className={styles.mainContent}>
      <ToDo />
    </div>
  )
}

export default MainContent
