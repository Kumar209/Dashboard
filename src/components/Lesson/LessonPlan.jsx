import React, { useState } from "react";
import ButtonClass from "../Dashboard/ButtonClass";
import Data from "./LessonTableData.jsx";

const LessonPlan = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div className="fixed w-full lg:pl-[21%]">
      <div className="flex items-center pl-5 pt-3">
        <h1 className="font-bold text-[25px]">Lesson Plan</h1>
      </div>

      <div className="pl-5 pr-7 pt-3 flex items-center justify-between">
        <div className="flex flex-col mr-2 lg:mr-0 lg:flex-row gap-5">
          <ButtonClass
            open={open}
            setOpen={setOpen}
            active="Filters"
            option1="Date"
            option2="Subject"
            option3="Lesson"
          />
          <ButtonClass
            open={open1}
            setOpen={setOpen1}
            active="2023"
            option1="2022"
            option2="2021"
            option3="2020"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            Add New Less Plan
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Generate Pdf
          </button>
        </div>
      </div>

      <div className="w-full h-screen mt-[15px]">
        <table className="border-collapse border border-slate-400 w-full">
          <thead className="h-[50px] text-white bg-[#071B63]">
            <tr>
              <th className="border border-slate-300">Date</th>
              <th className="border border-slate-300">Class</th>
              <th className="border border-slate-300">Subject</th>
              <th className="border border-slate-300">Unit</th>
              <th className="border border-slate-300">Topic</th>
              <th className="border border-slate-300">Lesson No.</th>
              <th className="border border-slate-300">Approval Date</th>
            </tr>
          </thead>

          <tbody>
            {
              Data.forEach((data) => {
                <tr className="h-[50px] text-center">
                  <td className="border border-slate-300 font-semibold">
                  {data.Date}
                  </td>
                  <td className="border border-slate-300 font-semibold">
                    {data.Class}
                  </td>
                  <td className="border border-slate-300 font-semibold">
                    {data.Subject}
                  </td>
                  <td className="border border-slate-300 font-semibold">
                    {data.Unit}
                  </td>
                  <td className="border border-slate-300 font-semibold">
                    {data.Topic}
                  </td>
                  <td className="border border-slate-300 font-semibold">
                    {data.Lesson}
                  </td>
                  <td className="border border-slate-300 font-semibold">
                    {data.Approval}
                  </td>
                </tr>;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LessonPlan;
