import {useState} from "react";

export const TaskManager = () => {
    const [tasks, setTasks] = useState([])
    const [count, setCount] = useState(0)
    const addTask = () => {
        const newTask = {
            id: count,
            title: `task${count}`,
            completed: false
        }
        setTasks([...tasks, newTask])
        setCount(n => n + 1)
    }
    return (
        <>
            <button onClick={addTask}>add task</button>
            <p>{tasks.map(task => <li>{task.title}</li>)}</p>
        </>
    )
}
