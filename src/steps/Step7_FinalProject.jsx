/**
 * STEP 7: Final Project - Task Manager
 * 
 * This combines everything we've learned:
 * - Components
 * - Props
 * - State
 * - Events
 * - Lists & Mapping
 * - Styling
 */

import { useState } from 'react';
import './Step7_FinalProject.css';

// Task Item Component
function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-text">{task.text}</span>
        <span className="task-priority">{task.priority}</span>
      </div>
      <button 
        onClick={() => onDelete(task.id)}
        className="delete-btn"
      >
        🗑️
      </button>
    </div>
  );
}

// Stats Component
function TaskStats({ total, completed }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div className="task-stats">
      <div className="stat-item">
        <span className="stat-label">Total Tasks:</span>
        <span className="stat-value">{total}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Completed:</span>
        <span className="stat-value">{completed}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Progress:</span>
        <span className="stat-value">{percentage}%</span>
      </div>
    </div>
  );
}

function Step7_FinalProject() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React basics', completed: true, priority: 'High' },
    { id: 2, text: 'Build a project', completed: false, priority: 'High' },
    { id: 3, text: 'Practice coding', completed: false, priority: 'Medium' }
  ]);
  
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Add new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
      priority: newTaskPriority
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Filter tasks
  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };

  const filteredTasks = getFilteredTasks();
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="step-container">
      <h1>Step 7: Final Project - Task Manager ✅</h1>
      
      <div className="lesson-content">
        <div className="info-box">
          <h3>🎯 This Project Demonstrates:</h3>
          <ul>
            <li>✅ Multiple state variables</li>
            <li>✅ Props passing to child components</li>
            <li>✅ Event handling (onClick, onChange, onSubmit)</li>
            <li>✅ List rendering with map()</li>
            <li>✅ Conditional rendering</li>
            <li>✅ Array manipulation (add, remove, update)</li>
            <li>✅ Custom CSS styling</li>
          </ul>
        </div>

        <div className="task-manager">
          <TaskStats total={tasks.length} completed={completedCount} />

          <form onSubmit={addTask} className="task-form">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Add a new task..."
              className="task-input"
            />
            <select
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value)}
              className="priority-select"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <button type="submit" className="add-btn">Add Task</button>
          </form>

          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All ({tasks.length})
            </button>
            <button 
              className={filter === 'active' ? 'active' : ''}
              onClick={() => setFilter('active')}
            >
              Active ({tasks.length - completedCount})
            </button>
            <button 
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed ({completedCount})
            </button>
          </div>

          <div className="task-list">
            {filteredTasks.length === 0 ? (
              <p className="empty-message">No tasks to show! 🎉</p>
            ) : (
              filteredTasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onToggle={toggleTask}
                />
              ))
            )}
          </div>
        </div>

        <div className="example-box">
          <h3>🚀 Challenge Ideas:</h3>
          <ul>
            <li>Add edit functionality for tasks</li>
            <li>Add due dates to tasks</li>
            <li>Sort tasks by priority or date</li>
            <li>Add categories/tags</li>
            <li>Save tasks to localStorage</li>
            <li>Add a dark mode toggle</li>
          </ul>
        </div>

        <div className="success-box">
          <h2>🎉 Congratulations!</h2>
          <p>You've completed the React basics workshop! You now know:</p>
          <ul>
            <li>How to create and use components</li>
            <li>How to pass data with props</li>
            <li>How to manage state</li>
            <li>How to handle events</li>
            <li>How to render lists</li>
            <li>How to style components</li>
          </ul>
          <p><strong>Keep practicing and building! 💪</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Step7_FinalProject;
