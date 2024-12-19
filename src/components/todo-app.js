import React, { useState, useEffect } from "react";

function TodoApp() {
  // State for tasks and filter
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All"); // Options: All, Completed, Pending

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (taskName) => {
    if (taskName.trim()) {
      setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true; // All
  });

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Todo List</h1>

      {/* Input for adding tasks */}
      <AddTaskForm onAddTask={addTask} />

      {/* Task Filters */}
      <TaskFilter filter={filter} setFilter={setFilter} />

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

// Component for adding tasks
function AddTaskForm({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
        style={{ padding: "10px", width: "calc(100% - 50px)" }}
      />
      <button type="submit" style={{ padding: "10px", marginLeft: "5px" }}>
        Add
      </button>
    </form>
  );
}

// Component for filtering tasks
function TaskFilter({ filter, setFilter }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => setFilter("All")}
        style={{
          padding: "10px",
          marginRight: "5px",
          background: filter === "All" ? "#ccc" : "#fff",
        }}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Completed")}
        style={{
          padding: "10px",
          marginRight: "5px",
          background: filter === "Completed" ? "#ccc" : "#fff",
        }}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("Pending")}
        style={{
          padding: "10px",
          background: filter === "Pending" ? "#ccc" : "#fff",
        }}
      >
        Pending
      </button>
    </div>
  );
}

// Component for rendering the task list
function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks to display</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <span
            onClick={() => onToggleTask(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.name}
          </span>
          <button onClick={() => onDeleteTask(task.id)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoApp;
