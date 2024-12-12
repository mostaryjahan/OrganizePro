import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState({ title: '', description: '', status: 'To Do' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate adding task (replace with real API call if needed)
    console.log(task);
    navigate('/');  // Navigate back to home page
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={task.title} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={task.description} onChange={handleChange} />
      </label>
      <label>
        Status:
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
