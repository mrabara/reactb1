import { useState } from 'react';

const AddTaskForm = (props) => {
    const [newTask, setNewTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const addTaskBtnHandler = () => {
        const index = props.tasks.findIndex( task => task.name.toLowerCase() === newTask.toLowerCase());
        
        if(newTask.trim() === '') {
            setErrorMessage('this field is required');
        } else if(index >= 0) {
            setErrorMessage('task already exists');
        } else {
            props.addTask({
                name: newTask,
                status: 'pending'
            });

            setNewTask('');
            setErrorMessage('');
        }
    }

    return(
        <div>
            <input 
                type="text"
                value = {newTask}
                onChange = { (e) => setNewTask(e.target.value)} 
            /> <br/>
            {errorMessage} <br />
            <button onClick={addTaskBtnHandler}>+ Add Task</button>
        </div>
    )
}

export default AddTaskForm;