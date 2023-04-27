import React from 'react';
import Navbar from "./components/Layout/Navbar.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import SideContent from "./components/SideContent/SideContent.jsx";

const App = () => {
  return (
    <div className="flex w-full h-full">
      <Navbar />
      <Dashboard />
      <SideContent />
    </div>
  )
}

export default App