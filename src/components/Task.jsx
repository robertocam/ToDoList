import { Trash } from 'phosphor-react'
import styles from './Task.module.css'



export function Task (props) {
  console.log(props)
  function handleDeleteTask(){
    props.onDeleteTask(props.id);
  }

  return (
    <div id={props.id} key={props.id} className={styles.container}>
      <div className={styles.box}>
        <label className={styles.contents}>
          <input type="checkbox" defaultChecked={props.isChecked}/>
          <p>{props.description}</p>
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <button onClick={handleDeleteTask} title='Deletar task'>
        <Trash size={18} />
      </button>
    </div>
  )
}