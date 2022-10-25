import { ClipboardText } from 'phosphor-react'
import styles from './Message.module.css';

export function Message () {
  return (
    <div className={styles.toDoList}>
        <div className={styles.message}>
          <div>
            <ClipboardText size={56} />
          </div>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
  )
}