import React, { useState } from 'react';
import { Task } from '../services/taskService';
import '../styles/TaskForm.css';

type TaskFormProps = {
  onSubmit: (task: Task) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = () => {
    // Validate input if needed

    // Create a new task object
    const newTask: Task = {
      id: new Date().getTime().toString(),
      title,
      description,
      dueDate,
      priority,
    };

    // Call the onSubmit function passed from the parent
    onSubmit(newTask);

    // Clear the form
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('');
  };

  return (
    <div>
      <h3>Create New Task</h3>
      <form>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Due Date:</label>
        <input type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

        <label>Priority:</label>
        <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />

        <button type="button" onClick={handleSubmit}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
