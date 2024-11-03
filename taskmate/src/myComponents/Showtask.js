import React from 'react';
import Taskcard from "./Taskcard";

export default function Showtask({taskList, setTaskList, task, setTask, btn, setBtnText}) {
  return (
    <div className="mx-36 px-2 shadow-lg border-gray-300 border-2 rounded-md">
        <div className="text-div px-5 flex justify-between items-center py-3">
          <div className="div flex space-x-4 items-center ">
          <span className='font-semibold text-2xl'>Todo</span> <p className='font-semibold text-xl w-9 pl-1 bg-slate-400 rounded-3xl text-white '>&nbsp; {taskList.length} </p>
          </div>
            
            <button className='p-2 bg-blue-500 text-white rounded-md ml-4 w-24' onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <hr />
        <div className="task-list-div grid grid-cols-3 gap-5 mt-5 mx-2 mb-5">
            <Taskcard taskList = {taskList} setTaskList = {setTaskList} task = {task} setTask = {setTask} btn={btn} setBtnText={setBtnText}/>
        </div>
    </div>
  );
}