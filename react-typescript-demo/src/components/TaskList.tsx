import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../services/taskService';
import '../styles/TaskList.css';

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedTask: Task) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;
