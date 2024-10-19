import Clients from '@/components/clients';
import Dashboard from '@/components/dashboard';
import Network from '@/components/network';
import SideBar from '@/components/shared/SideBar'
import { Routes, Route } from "react-router-dom";

// src/pages/Dashboard.js
  
  // src/pages/Settings.js
  const Settings = () => {
    return <div className=' flex-grow '>Settings Content</div>;
  };
const Principal = () => {
  return (
    <div className=' flex flex-row max-h-screen'>
      <SideBar />
      <div className=' w-full rounded-t-md overflow-y-scroll'>
        <Routes>
          <Route  index element={<Settings />} />
          <Route  path="dashboard" element={<Dashboard />} />
          <Route  path="dashboard" element={<Dashboard />} />
          <Route  path="clients" element={<Clients />} />
          <Route  path="network" element={<Network />} />
           
        </Routes>
      </div>
    </div>
  )
}

export default Principal

