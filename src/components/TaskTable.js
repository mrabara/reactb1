import TaskRow from './TaskRow';

const TaskTable = ({tasks, title, deleteTask, markAsDone}) => {
    const display = tasks.length > 0 ?
    <>
        <h2>{title}</h2>
        <table>
            {
                tasks
                    .map( task => <TaskRow task={task} deleteTask={deleteTask} markAsDone={markAsDone}/>)
            }
        </table>
    </> : 
    <h2>No {title}</h2>
    
    return(
        <>
            {display}
        </>
    )
}

export default TaskTable;