import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import EditTask from './components/EditTask';
import AddTask from './components/AddTask.jsx';

import FilterTask from './components/FilterTask.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/edit/:taskId" element={<EditTask />} /> 
    <Route path="/add" element={<AddTask />}/>
    <Route path="/add" element={<FilterTask />}/>

  </Routes>
</BrowserRouter>
)
