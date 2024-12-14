import { useEffect, useState } from "react";
import { ReactTabulator } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css";
import { fetchTasks } from "../services/data";
import AddTask from "./AddTask";
import FilterTask from "./FilterTask";
import Search from "./Search";
import logo from "../assets/app.png";

const Table = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");

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
    // Filter tasks based on statusFilter and searchQuery
    let filtered = tasks;

    if (statusFilter) {
      filtered = filtered.filter((task) => task.status === statusFilter);
    }

    if (search) {
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(search.toLowerCase()) ||
          task.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredTasks(filtered);
  }, [statusFilter, search, tasks]);

  const columns = [
    { title: "Task No.", field: "id", width: 100, hozAlign: "center" },
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
      vertAlign: "middle", 
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
      <div className="max-w-5xl mx-auto bg-sky-100 shadow-md rounded-lg p-6">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center mt-2">
            Organize<span className="text-orange-600">Pro</span>
          </h1>
        </div>

        <div className="flex justify-between items-center mb-10 mt-10">
          <div className="w-[50%]">
            <Search search={search} setSearch={setSearch} />
          </div>

          <div>
            <FilterTask
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
          </div>
        </div>
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
