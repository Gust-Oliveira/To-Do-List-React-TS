import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react'
import styles from './TaskForm.module.css'
import {ITask} from '../interfaces/task';

interface Props {
    btnText:string
}

const TaskForm = ({btnText}: Props) => {
  const [id,setId] = useState<number>(0);

  
  
  
  
  
  
  
  
  
    return (
    <form className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name="title" placeholder="Título da tarefa" />
        </div>
        <div className={styles.input_container}>
            <label htmlFor='difficulty'>Dificuldade::</label>
            <input type="text" name="difficulty" placeholder='Dificildade da tarefa' />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm