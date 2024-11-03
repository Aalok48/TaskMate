import React from 'react';

export default function Taskcard({taskList, setTaskList, task, setTask, btn, setBtnText}) {

    function handleEdit(taskToEdit) {
        const taskObjectToEdit = taskList.find(task => task.id === taskToEdit.id);
        setTask(taskObjectToEdit);
        setBtnText('Update');
        document.getElementById('input-field').focus();
    }

    function handleDelete(e) {
        const taskNameToDelete = e.currentTarget.value;
        const updatedTaskList = taskList.filter((task) => task.taskName !== taskNameToDelete);
        setTaskList(updatedTaskList);
    }
    return (
        <>
            {taskList.map((task, index) => (
                <div key={index} className="taskcard flex border-2 w-full border-l-4 border-l-blue-400 justify-between h-20 px-3 rounded-md items-center">
                    <div className="task-date-div">
                        <div className="task-name font-semibold text-xl">
                            {task.taskName}
                        </div>
                        <div className="date-detail text-sm">
                            {task.time}
                        </div>
                    </div>
                    <div className="icon-div flex space-x-3">
                        <div className="edit-div">
                            <button onClick={() => handleEdit(task)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </button>
                        </div>
                        <div className="delete-div -mt-1">
                            <button onClick={handleDelete} value={task.taskName}>
                                <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}