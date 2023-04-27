import React from "react";
import Attendance from "./Attendance.jsx";
import StudyMaterial from "./StudyMaterial.jsx";
import StudentPerformance from "./StudentPerformance.jsx";

const DashboardContent = () => {
  return (
    <div className="mt-10 flex">
      <div className="flex flex-col mr-2">
        <Attendance />
        <StudentPerformance />
      </div>
      <StudyMaterial />
    </div>
  );
};

export default DashboardContent;
