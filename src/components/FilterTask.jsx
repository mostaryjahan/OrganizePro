import { useState } from 'react';

const FilterTasks = ({ tasks, setFilteredTasks }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const status = e.target.value;
    setFilter(status);
    setFilteredTasks(tasks.filter(task => task.status === status || status === ''));
  };

  return (
    <div className='flex justify-end mb-8'>
      <label className='text-lg px-2'>Filter by Status: </label>
      <select onChange={handleFilterChange} value={filter} className='border border-black px-2'>
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default FilterTasks;
