import React from "react";
import Attendance from "./Attendance.jsx";
import StudyMaterial from "./StudyMaterial.jsx";
import StudentPerformance from "./StudentPerformance.jsx";

const DashboardContent = () => {
  return (
    <div className="z-10 mt-10 md:mx-6 lg:mx-0 lg:flex">
      <div className="flex flex-col mr-2">
        <Attendance />
        <StudentPerformance />
      </div>
      <StudyMaterial />
    </div>
  );
};

export default DashboardContent;
