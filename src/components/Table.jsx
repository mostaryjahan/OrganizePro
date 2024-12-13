import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../services/data'; // Import the fetchTasks function
import AddTask from './AddTask';
import FilterTasks from './FilterTask';

const Table = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks(); // Fetch tasks from the API
      setTasks(data);
    };
    getTasks();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Organize<span className='text-orange-600'>Pro</span></h1>
        <div className="mb-6 flex justify-between items-center">
        </div>
        <FilterTasks />
        <AddTask />


        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-6 py-3 text-left text-sm font-medium">Task NO.</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-t border-gray-300 hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 text-sm text-gray-600">{task.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{task.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{task.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{task.status}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex space-x-2">
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        >
                          Delete
                        </button>
                        <Link
                          to={`/edit/${task.id}`}
                          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                        >
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 text-sm"
                  >
                    No tasks found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;