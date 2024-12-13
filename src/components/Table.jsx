import { useEffect, useState } from 'react';
import { ReactTabulator } from 'react-tabulator'; // Tabulator wrapper
import 'tabulator-tables/dist/css/tabulator.min.css'; // Tabulator styles
import { fetchTasks } from '../services/data';
import AddTask from './AddTask';
import FilterTasks from './FilterTask';

const Table = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Fetch tasks on component mount
  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      const mappedTasks = data.slice(0, 20).map((task) => ({
        id: task.id,
        title: task.title,
        description: task.description, // Placeholder, as API doesn't have a description
        status: task.completed ? 'Done' : 'To Do',
      }));
      setTasks(mappedTasks);
      setFilteredTasks(mappedTasks);
    };
    getTasks();
  }, []);

  // Tabulator columns configuration
  const columns = [
    { title: 'Task No.', field: 'id', width: 100 },
    { title: 'Title', field: 'title', editor: 'input' },
    { title: 'Description', field: 'description', editor: 'textarea' },
    {
      title: 'Status',
      field: 'status',
      editor: 'select',
      editorParams: { values: ['To Do', 'In Progress', 'Done'] },
    },
    {
      title: 'Actions',
      formatter: 'buttonCross',
      width: 100,
      align: 'center',
      cellClick: (e, cell) => handleDelete(cell.getData().id),
    },
  ];

  // Delete a task
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  // Add a new task
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  // Filter tasks by status
  const filterByStatus = (status) => {
    if (status === 'All') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === status));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Organize<span className="text-orange-600">Pro</span>
        </h1>
        <div className="mb-6 flex justify-between items-center">
          <FilterTasks onFilter={filterByStatus} />
          <AddTask onAdd={addTask} />
        </div>
        <ReactTabulator
          data={filteredTasks}
          columns={columns}
          layout="fitData"
          options={{
            responsiveLayout: 'collapse',
            movableColumns: true,
          }}
        />
      </div>
    </div>
  );
};

export default Table;
