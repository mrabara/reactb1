
const TaskRow = ({task: {name, status}, deleteTask, markAsDone}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>
                {
                    status === 'pending' ?
                    <button onClick={() => markAsDone(name)}>done</button> : null
                }
                <button onClick={() => deleteTask(name)}>delete</button>
            </td>
        </tr>
    );
}

export default TaskRow;