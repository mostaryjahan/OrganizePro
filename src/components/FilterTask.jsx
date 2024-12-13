
const FilterTask = ({ statusFilter, setStatusFilter }) => {
  // Handler for filter change
  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="statusFilter">Filter by Status: </label>
      <select
        id="statusFilter"
        value={statusFilter}
        onChange={handleFilterChange}
      >
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default FilterTask;
