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
        description: task.title,  // Placeholder for description (can be updated if needed)
        status: task.completed ? 'Done' : 'To Do',  // Map the completed field to the status
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
  