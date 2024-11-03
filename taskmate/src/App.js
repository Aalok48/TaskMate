import React, { useEffect, useState } from 'react';
import Header from './myComponents/Header';
import Addtask from './myComponents/Addtask';
import Showtask from './myComponents/Showtask';

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || [])
  const [task, setTask] = useState({})
  const [btn, setBtnText] = useState('Add Task')

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className='w-screen h-screen'>
      <Header />
      <Addtask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} btn={btn} setBtnText={setBtnText} />
      <Showtask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} btn={btn} setBtnText={setBtnText} />
      </div>
  );
}

export default App;