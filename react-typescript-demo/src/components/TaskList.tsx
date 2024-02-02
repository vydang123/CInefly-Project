import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { Task } from '../services/taskService';
import '../styles/TaskList.css';

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedTask: Task) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [filterPriority, setFilterPriority] = useState<string | null>(null);

  const filteredTasks = tasks.filter((task) => {
    const isStatusMatch =
      filterStatus === null || (filterStatus === 'completed' ? task.completed : !task.completed);

    const isPriorityMatch =
      filterPriority === null || filterPriority === 'All' || task.priority.toLowerCase() === filterPriority.toLowerCase();

    return isStatusMatch && isPriorityMatch;
  });

  return (
    <div className="task-list">
      <div className="filters">
        <label>Status:</label>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <label>Priority:</label>
        <select onChange={(e) => setFilterPriority(e.target.value)}>
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};
export default TaskList;
