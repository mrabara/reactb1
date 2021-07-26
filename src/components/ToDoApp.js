import { useState } from 'react';
import TaskTable from './TaskTable';
import AddTaskForm from './AddTaskForm';

const ToDoApp = ({tasks, setTasks, addTask}) => {
    const pendingTasks = [];
    const doneTasks = [];

    tasks.forEach( task => {
        if(task.status === 'pending') {
            pendingTasks.push(task);
        } else if(task.status === 'done') {
            doneTasks.push(task);
        }
    });

    const deleteTask = (name) => {
        const updatedTasks = tasks.filter( task => task.name !== name);

        setTasks(updatedTasks);
    }

    const markAsDone = (name) => {
        // const updatedTasks = tasks.map ( task => {
        //     if(task.name === name) {
        //         task.status = 'done';
        //     }
        //     return task;
        // })
        const tasksCopy = [...tasks];
        const index = tasks.findIndex( task => task.name === name);
        tasksCopy[index].status = 'done';

        setTasks(tasksCopy);
    }

    return(
        <div>
            <h1>To Do App</h1>
            <AddTaskForm addTask={addTask} tasks={tasks} />
            <TaskTable 
                title="Pending Tasks" 
                tasks={pendingTasks} 
                deleteTask={deleteTask} 
                markAsDone={markAsDone} 
            />
            <TaskTable 
                title="Done Tasks" 
                tasks={doneTasks} 
                deleteTask={deleteTask}
            /> 
        </div>
    )
}

export default ToDoApp;