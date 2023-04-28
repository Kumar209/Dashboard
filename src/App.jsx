import React from 'react';
import Navbar from "./components/Layout/Navbar.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

const App = () => {
  return (
    <div className="lg:flex w-full h-full">
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App