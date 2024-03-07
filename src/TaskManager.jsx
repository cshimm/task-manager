import {useState} from "react";

export const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);
    const addTask = () => {
        const newTask = {
            id: count,
            title: `Task${count}`,
            completed: false
        }
        setTasks([...tasks, newTask]);
        setCount(count => count + 1);
    }
    const toggleTask = (id) => {
        const updated = tasks.map(task => {
            if (task.id === id)
                return {
                    ...task,
                    completed: !task.completed
                };
            return task;
        });
        setTasks(updated)
    }
    return (
        <>
            <button style={{marginBottom: "1em"}} onClick={addTask}>add task</button>
            {tasks.map(task => {
                return <div key={task.id}>
                    <button onClick={() => toggleTask(task.id)}>
                        {task.title} {task.completed ? "completed" : "incomplete"}
                    </button>
                </div>
            })}
        </>
    )
}
