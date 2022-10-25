import { Message } from './Message';
import { PlusCircle, } from 'phosphor-react';
import { Task } from './Task';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Main.module.css'

export function Main() {
  function taskId () {
    return (uuidv4())
  };
  let id = taskId();
  // const [taskId, setTaskId] = useState ([uuidv4()])
  const taskIsChecked = false;
  const [taskDescription, setTaskDescription] = useState ([ 
    'Integer urna interdum massaauctor neque turpis semper. Dius vel sed fames integer'
  ])

  const [newTaskDescriptionText, setNewTaskDescriptionText] = useState('')

  function handleCreateNewTask() {
    event.preventDefault()

    setTaskDescription([...taskDescription, newTaskDescriptionText]);
    setNewTaskDescriptionText('');
  }

  function handleNewTaskChange() {
    setNewTaskDescriptionText(event.target.value);
    //event.target.setCustomValidity('');
  }
  console.log(taskDescription)
  console.log(newTaskDescriptionText)

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm} >
        <textarea 
          name="description" 
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange} 
          // onInvalid={handleNewTaskInvalid}
          value={newTaskDescriptionText}
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
        {taskDescription.map(task =>{
          return (
            <Task
              key={id}
              id={id}
              isChecked={taskIsChecked}
              description={task}
              // onDeleteTask={deleteTask}
            />
          )
        })}
      </div>
    
    </article>
  )
}