import React from "react";
import DashboardHeader from "./DashboardHeader.jsx";
import DashboardContent from "./DashboardContent.jsx";
import SideContent from "../SideContent/SideContent.jsx";

const Dashboard = () => {
  return (
    <div className="w-full lg:flex lg:pl-[21%] ">
      <div className="lg:pb-5 lg:pr-[21px] ">
        <DashboardHeader />
        <DashboardContent />
      </div>
      <SideContent />
    </div>
  );
};

export default Dashboard;


// lg:w-[calc(100%_-_314px)]
