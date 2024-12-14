import { useEffect, useState } from "react";
import { ReactTabulator } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css";
import { fetchTasks } from "../services/data";
import AddTask from "./AddTask";
import FilterTask from "./FilterTask";

const Table = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      const mappedTasks = data.slice(0, 20).map((task) => ({
        id: task.id,
        title: task.title,
        description: task.description || "No description",
        status: task.completed ? "Done" : "To Do",
      }));
      setTasks(mappedTasks);
      setFilteredTasks(mappedTasks);
    };
    getTasks();
  }, []);

  useEffect(() => {
    // Filter tasks based on statusFilter
    if (statusFilter) {
      setFilteredTasks(tasks.filter((task) => task.status === statusFilter));
    } else {
      setFilteredTasks(tasks);
    }
  }, [statusFilter, tasks]);

  const columns = [
    { title: "Task No.", field: "id", width: 100 ,hozAlign: "center" },
    { title: "Title", field: "title", editor: "input" },
    { title: "Description", field: "description", editor: "textarea" },
    {
      title: "Status",
      field: "status",
      width: 100,
      editor: "select",
      hozAlign: "center",
      editorParams: { values: ["To Do", "In Progress", "Done"] },
    },
    {
      title: "Actions",
      field: "actions",
      formatter: "buttonCross",
      width: 100,
      hozAlign: "center",
      cellClick: (e, cell) => handleDelete(cell.getData().id),
    },
  ];

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Organize<span className="text-orange-600">Pro</span>
        </h1>
        <FilterTask
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        <AddTask addTask={addTask} tasks={tasks} />

        <ReactTabulator
          data={filteredTasks}
          columns={columns}
          layout="fitColumns"
          options={{
            responsiveLayout: "collapse",
            movableColumns: true,
          }}
        />
      </div>
    </div>
  );
};

export default Table;
