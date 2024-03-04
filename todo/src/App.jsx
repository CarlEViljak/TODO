import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1>React TODO App</h1>
            <div id="task-container">
                {tasks.map((task, index) => (
                    <div key={index} className="task">
                        <span>{task}</span>
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}

export default App;
