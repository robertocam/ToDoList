import { Message } from './Message';
import { PlusCircle, } from 'phosphor-react';
import { Task } from './Task';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Main.module.css'

export function Main() {
  const [tasks, setTasks] = useState ([
    {
      id: uuidv4(),
      description: 'Integer urna interdum massaauctor neque turpis semper. Dius vel sed fames integer',
      isChecked: false,
    }
  ])

  const [newTaskText, setNewTaskText] = useState(
    {  
      id: uuidv4(),
      description: '',
      isChecked: false,
    }
  )

  function handleCreateNewTask() {
    event.preventDefault()
    
    setTasks([...tasks, newTaskText]);

    setNewTaskText.description('');
  }

  function handleNewTaskChange() {
    setNewTaskText(oldTasks =>{
        return {
          ...oldTasks,
          id: uuidv4(),
          description: event.target.value
        }
      })
    event.target.setCustomValidity('');
  }
  console.log(tasks)
  console.log(setTasks)
  console.log(setNewTaskText)
  console.log(newTaskText)

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm} >
        <textarea 
          name="description" 
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange} 
          // onInvalid={handleNewTaskInvalid}
          value={newTaskText.description}
          cols="30" 
          rows="1"
        />
        <button type="submit" >
          Criar 
          <span>
            <PlusCircle 
              size={20}
              weight="bold"
            />
          </span>
        </button>
      </form>

      <div className={styles.taskStatus}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.completed}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </div>
      <div className='message'>
        <Message/>
      </div>
      <div className={styles.toDoTasks}>
        {tasks.map(task =>{
          return (
            <Task
              key={task.id}
              id={task.id}
              isChecked={task.isChecked}
              description={task.description}
              // onDeleteTask={deleteTask}
            />
          )
        })}
      </div>
    
    </article>
  )
}