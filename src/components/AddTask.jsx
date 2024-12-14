import { useState } from 'react';

const AddTask = ({ addTask, tasks }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'To Do' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title.trim() || !newTask.description.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    // Dynamically calculate next id based on the number of existing tasks
    const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    addTask({ id: nextId, ...newTask });
    setNewTask({ title: '', description: '', status: 'To Do' }); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newTask.title}
        onChange={handleChange}
        className="border border-black px-3 rounded-md w-1/3"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newTask.description}
        onChange={handleChange}
        className="border border-black px-3 rounded-md w-1/3"
      />
      <select
        name="status"
        value={newTask.status}
        onChange={handleChange}
        className="border border-black px-3 rounded-md w-1/6"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button
        type="submit"
        className="bg-orange-500 font-semibold text-white px-2 lg:px-4 py-1 lg:py-2 rounded-md hover:bg-orange-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
