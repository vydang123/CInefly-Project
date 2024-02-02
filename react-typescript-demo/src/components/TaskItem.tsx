import React, { useState } from 'react';
import { Task } from '../services/taskService';
import '../styles/TaskItem.css';

type TaskItemProps = {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedTask: Task) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
  const [editedPriority, setEditedPriority] = useState(task.priority);
  const [editedCompleted, setEditedCompleted] = useState(task.completed);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTask: Task = {
      ...task,
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
      priority: editedPriority,
      completed: editedCompleted,
    };

    onEdit(task.id, updatedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div className="edit-form">
          <label>Title:</label>
          <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />

          <label>Description:</label>
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />

          <label>Due Date:</label>
          <input
            type="text"
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
          />

          <label>Priority:</label>
          <input
            type="text"
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}
          />

          <label>Status:</label>
          <select
            value={editedCompleted.toString()}
            onChange={(e) => setEditedCompleted(e.target.value === 'true')}
          >
            <option value="true">Completed</option>
            <option value="false">Pending</option>
          </select>

          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
