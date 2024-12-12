import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";
import Table from "../components/Table";

const Home = () => {
    return (
        <div className="bg-gray-100 mx-auto px-2 lg:p-0 min-h-screen">
            <Table></Table>
            <AddTask></AddTask>
            <EditTask></EditTask>
        </div>
    );
};

export default Home;