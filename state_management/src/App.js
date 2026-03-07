import "./App.css";
import React, { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const totalTasks = taskList.length;
  const completedTask = taskList.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTask;

  const completedPercentage =
    totalTasks > 0 ? Math.round((completedTask / totalTasks) * 100) : 0;

  const handleAddTask = () => {
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    if (newTask.trim() !== "") {
      setTaskList([...taskList, task]);
      setNewTask("");
    }
  };

  console.log(taskList);

  const handleToggle = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1 style ={{textAlign: "center"}}>My Task List</h1>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          margin: '2rem',
          borderRadius: "5px",
        }}
      >
        <h3> Task Statistics</h3>
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTask}</p>
        <p>Remaining Tasks: {remainingTasks}</p>

        <div
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${completedPercentage}%`,
              height: "100%",
              backgroundColor: "#4caf50",
              borderRadius: "10px",
            }}
          ></div>
        </div>
        <p> Progress: {completedPercentage}%</p>
      </div>

      <input
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{margin:'2rem'}}
      />
      <button onClick={handleAddTask}> Add Task</button>
      <ul style={{margin:'2rem'}}>
        {taskList.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            <span> {task.text} </span>
            <button onClick={() => handleDeleteTask(task.id)} style={{ backgroundColor:'lightcoral', borderRadius:'5px', marginLeft:'10px'}}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
