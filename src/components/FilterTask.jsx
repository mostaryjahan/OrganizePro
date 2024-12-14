
const FilterTask = ({ statusFilter, setStatusFilter }) => {
  // Handler for filter change
  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <div className="">
      <label className="text-lg font-semibold" htmlFor="statusFilter">Filter by Status: </label>
      <select
        id="statusFilter"
        value={statusFilter}
        onChange={handleFilterChange}
        className="border border-black px-2 py-1 rounded-sm"
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
