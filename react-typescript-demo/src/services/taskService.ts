export type Task = {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    completed: boolean;
  };
  
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description for Task 1',
      dueDate: '2024-02-10',
      priority: 'High',
      completed: false
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description for Task 2',
      dueDate: '2024-02-15',
      priority: 'Medium',
      completed: false
    },
    // Add more tasks as needed
  ];
  
  export const getAllTasks = (): Task[] => {
    return tasks;
  };
  