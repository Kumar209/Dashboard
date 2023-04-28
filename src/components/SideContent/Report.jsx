import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Report = () => {
  const [startDate, setStartDate] = useState(new Date());
  const progressPercentage  = 70;

  return (
    <div className="shadow-3xl bg-white h-[150px] w-[90%] px-3 py-3 rounded-[10px]">
      <div className="flex justify-around">
        <span className="font-bold text-[15px]">Your Day Report</span>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM"
          maxDate={new Date()}
          scrollableMonthYearDropdown
        />
      </div>

      <div className="w-[90%] mt-5 ml-3">
        <div className="h-2 w-full bg-gray-300">
          <div
            style={{ width: `${progressPercentage}%` }}
            className={`h-full ${
                progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'}
            }`}
          ></div>
          <span className={`font-bold text-[16px] ${progressPercentage < 70 ? 'text-[red]' : 'text-[green]'}}`}>{progressPercentage} %</span>
        </div>

        <div className="mt-8 flex justify-around">
            <span className="flex font-semibold"><div className="mt-[10px] mr-1 rounded-[50%] bg-[green] w-[7px] h-[7px]"></div> Done</span>
            <span className="flex font-semibold"><div className="mt-[10px] mr-1 rounded-[50%] bg-[red] w-[7px] h-[7px]"></div>Progress</span>
        </div>
      </div>
    </div>
  );
};

export default Report;
