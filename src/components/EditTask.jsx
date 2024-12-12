import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTaskById } from "../services/data";

const EditTask = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getTask = async () => {
      const data = await fetchTaskById(taskId);
      setTask(data);
    };
    getTask();
  }, [taskId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };

  if (!task) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Status:
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
