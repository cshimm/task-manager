import {useState} from "react";

export const TaskManager = () => {
    const [tasks, setTasks] = useState([])
    const [count, setCount] = useState(0)
    const addTask = () => {
        console.log(count)
        const newTask = {
            id: count,
            title: `task${count}`,
            completed: false
        }
        setTasks([...tasks, newTask])
        setCount(n => n + 1)
    }
    const toggleTask = (e, id) => {
        e.stopPropagation()
        console.log(id)
        const updated = tasks.map(t => {
            if (t.id === id)
                return {
                ...t,
                    completed: !t.completed
                }
            return tasks
        })
        setTasks(updated)
    }
    return (
        <>
            <button onClick={addTask}>add task</button>
            <div>{tasks.map(task => {return <div>
                    <li>{task.title} {task.completed ? "true" : "false"}</li>
                    <button onClick={(e) => toggleTask(e, task.id)}>Toggle {task.id}</button>
                </div>
            })}</div>
        </>
    )
}
