// services/data.js

export const fetchTasks = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      return data.map((task) => ({
        id: task.id,
        title: task.title,
        description: task.title,  
        status: task.completed ? 'Done' : 'To Do', 
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export const fetchTaskById = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch task');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  