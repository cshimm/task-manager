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
        // Immutability is ensured by mapping over the tasks state and checking if each task item's id
        //matches the id passed in. If so only that task's completed property is inverted. Here a new task object is also
        // being created with the properties of the previous task object. Creating a new object then setting that as the
        //state rather than mutating the state directly ensures state updates are recognized by React so that a render
        // can be scheduled and performed.
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
