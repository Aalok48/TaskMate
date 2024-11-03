import React, { useState, useEffect } from 'react';

export default function Addtask({ taskList, setTaskList, task, setTask, btn, setBtnText }) {
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        setTaskInput(task.taskName || '');
    }, [task]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updateTask = taskList.map((toDo) => (
                toDo.id === task.id ? { id: toDo.id, taskName: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : toDo
            ));
            setTaskList(updateTask);
            setTask({});
            setTaskInput('');
            setBtnText('Add Task');
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                taskName: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            };

            setTaskList([...taskList, newTask]);
            setTaskInput('');
        }
    };

    const handleInputChange = (e) => {
        setTask({ ...task, taskName: e.target.value });
        setTaskInput(e.target.value);
    };

    return (
        <>
            <div className='flex justify-center'>
                <section className='border-2 m-16 w-1/3 flex h-20 rounded-md shadow-lg items-center border-gray-300'>
                    <form className='w-full flex items-center p-3' onSubmit={handleOnSubmit}>
                        <input type="text" className='w-2/3 p-2 border-2 rounded' placeholder='Enter your task...' name='task' value={taskInput} id='input-field' required autoComplete='off' onChange={handleInputChange} />
                        <button className='w-1/4 p-2 bg-green-500 text-white rounded-md ml-7' type='submit'>{btn}</button>
                    </form>
                </section>
            </div>
        </>
    );
}