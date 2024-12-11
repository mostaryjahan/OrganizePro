
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../services/api';  // Import the fetchTasks function

const Table = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();  // Fetch tasks from the API
      setTasks(data);
    };
    getTasks();
  }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h1>Task List Manager</h1>
      <Link to="/add">Add New Task</Link>
      
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <button>Delete</button> {/* Implement delete functionality */}
                <Link to={`/edit/${task.id}`}>Edit</Link> {/* Link to edit the task */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
