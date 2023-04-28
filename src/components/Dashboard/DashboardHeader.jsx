import React, { useState } from "react";
import ButtonClass from "./ButtonClass.jsx";

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div className="flex justify-between pt-5 px-3 lg:mr-10 pl-5">
      <div className="mr-[10px]">
        <h1 className="text-2xl lg:text-3xl font-bold">Teacher`s Dashboard</h1>
        <span className="text-[gray] font-bold text-[15px] lg:text-[20px]">30 April</span>
      </div>

      <div className="flex flex-col lg:flex-row pt-2 gap-3">
        <ButtonClass open={open} setOpen={setOpen} active="Class 8" option1="Class 6" option2="Class 7" option3="Class 9"/>

        <ButtonClass open={open1} setOpen={setOpen1} active="Section A" option1="Section B" option2="Section C" option3="Section D"/>
      </div>
    </div>
  );
};

export default DashboardHeader;
