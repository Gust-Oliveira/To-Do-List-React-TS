import React from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import styles from'./components/app.module.css';

import {ITask} from './interfaces/task';

function App() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que vc vai fazer</h2>
          <TaskForm btnText='Criar tarefa '/>
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList/>
        </div>
      </main>
      <Footer/>  
    </div>
  );
}

export default App;
