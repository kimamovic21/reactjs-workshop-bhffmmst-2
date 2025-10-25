import { useState } from "react";
import styles from "./Homework.module.css";

// Step 4: Lists & Mapping - Sample data
const initialTasks = [
  { id: 1, title: "Learn React basics", completed: false },
  { id: 2, title: "Practice JSX syntax", completed: true },
  { id: 3, title: "Master useState hook", completed: false },
];

const Homework = () => {
  // Step 5: State Management - Managing multiple states
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  // Step 6: Event Handling - Add new task
  const handleAddTask = (e) => {
    e.preventDefault();

    if (newTaskTitle.trim() === "") {
      alert("Please enter a task title!");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  // Step 6: Event Handling - Toggle task completion
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Step 6: Event Handling - Delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Step 4: Lists & Mapping - Filter tasks based on selected filter
  const getFilteredTasks = () => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  const filteredTasks = getFilteredTasks();

  // Calculate statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>📝 React Homework - Task Manager</h1>
        <p className={styles.subtitle}>Steps 4, 5 & 6: Lists, State & Events</p>

        {/* Step 6: Event Handling - Form for adding tasks */}
        <form onSubmit={handleAddTask} className={styles.form}>
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter a new task..."
            className={styles.input}
          />
          <button type="submit" className={styles.addButton}>
            Add Task
          </button>
        </form>

        {/* Statistics Section */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Total:</span>
            <span className={styles.statValue}>{totalTasks}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Active:</span>
            <span className={styles.statValue}>{activeTasks}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Completed:</span>
            <span className={styles.statValue}>{completedTasks}</span>
          </div>
        </div>

        {/* Step 6: Event Handling - Filter buttons */}
        <div className={styles.filterButtons}>
          <button
            onClick={() => setFilter("all")}
            className={`${styles.filterButton} ${
              filter === "all" ? styles.active : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`${styles.filterButton} ${
              filter === "active" ? styles.active : ""
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`${styles.filterButton} ${
              filter === "completed" ? styles.active : ""
            }`}
          >
            Completed
          </button>
        </div>

        {/* Step 4: Lists & Mapping - Render task list */}
        <div className={styles.taskList}>
          {filteredTasks.length === 0 ? (
            <p className={styles.emptyMessage}>
              {filter === "all"
                ? "No tasks yet. Add one above! 👆"
                : `No ${filter} tasks.`}
            </p>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`${styles.taskItem} ${
                  task.completed ? styles.completed : ""
                }`}
              >
                <div className={styles.taskContent}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                    className={styles.checkbox}
                  />
                  <span className={styles.taskTitle}>{task.title}</span>
                </div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className={styles.deleteButton}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {/* Learning Points Section */}
        <div className={styles.learningPoints}>
          <h3 className={styles.learningTitle}>✨ What You Learned:</h3>
          <ul className={styles.learningList}>
            <li>
              <strong>Step 4:</strong> Used <code>map()</code> to render a list
              of tasks with unique keys
            </li>
            <li>
              <strong>Step 5:</strong> Managed multiple states (tasks,
              newTaskTitle, filter) with <code>useState</code>
            </li>
            <li>
              <strong>Step 6:</strong> Handled events (onClick, onChange,
              onSubmit) for user interactions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homework;
