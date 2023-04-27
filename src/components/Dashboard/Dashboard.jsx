import React from 'react';
import DashboardHeader from "./DashboardHeader.jsx";
import DashboardContent from "./DashboardContent.jsx";

const Dashboard = () => {
  return (
    <div className='w-[950px] pb-5'>
    <DashboardHeader />
    <DashboardContent />
    </div>
  )
}

export default Dashboard