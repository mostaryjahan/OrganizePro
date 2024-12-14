import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import EditTask from './components/EditTask';
import AddTask from './components/AddTask.jsx';
import FilterTask from './components/FilterTask.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/edit/:taskId" element={<EditTask />} /> 
    <Route path="/add" element={<AddTask />}/>
    <Route path="/filter" element={<FilterTask />}/>

  </Routes>
  

</BrowserRouter>
)
