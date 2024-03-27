import React from 'react'; // Add the missing import statement for React
import { useState } from 'react'; // Add the missing import statement for useState
import './App.css';
import Taskcreate from './components/Taskcreate';
import Tasklist from './components/Tasklist';
function App() {
  const [tasks, setTask] = useState([])

  const createTask = (title, desc) => {
    const newTask = [...tasks, {
      title,
      desc,
      id: Math.floor(Math.random() * 10000)
      }]
    setTask(newTask)
  }
   return (
    <div className="App">
      <h1 className='Task-title'>Lütfen Task Ekleyiniz !</h1>
      <Taskcreate onCreate={createTask}/>
      <h1 className='Task-title'>Görevler</h1>
      <Tasklist tasks={tasks}/>
     
    </div>
  );
}

export default App;
