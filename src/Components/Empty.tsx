import EmptyImg from '../assets/image/Clipboard.png'
import styles from './Empty.module.css'

export function EmptyTask() {
  return (
    <div className={styles.container}>
      <img src={EmptyImg} alt="clipboard img" />
      <p className={styles.paragraph}>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}