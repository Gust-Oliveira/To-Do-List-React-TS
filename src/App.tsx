import React, { useState } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import styles from'./components/app.module.css';

import {ITask} from './interfaces/task';
import Modal from './components/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter((task) => {
      return task.id !== id;
    })
    )
  }



  return (
    <div>
      <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList}/>} />
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que vc vai fazer</h2>
          <TaskForm btnText='Criar tarefa' taskList={taskList}  setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer/>  
    </div>
  );
}

export default App;
