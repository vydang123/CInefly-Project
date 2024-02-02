import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getAllTasks, Task } from './services/taskService';
import './styles/App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(getAllTasks());

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id: string, updatedTask: Task) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? updatedTask : task));
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default App;
