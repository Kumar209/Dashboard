import React, { useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const ButtonClass = ({open, setOpen, active, option1, option2, option3}) => {
  const [activeOption, setActiveOption] = useState(active);

  return (
    <div className="flex flex-col">
      <button
        className="w-[7rem] h-8 flex items-center justify-center border border-slate-500 rounded-[10px] font-medium"
        onClick={() => setOpen(!open)}
      >
        {activeOption}
        <BsArrowDownCircleFill size={17} className="ml-[5px]" />
      </button>

      <div
        className={` ${
          open ? "" : "hidden"
        } absolute z-20 bg-white rounded-lg shadow w-[6rem] dark:bg-gray-700 mt-10`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li onClick={() => setActiveOption(option1) || setOpen(false)}>
            {" "}
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {option1}{" "}
            </a>
          </li>

          <li onClick={() => setActiveOption(option2) || setOpen(false)}>
            {" "}
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {option2}{" "}
            </a>
          </li>

          <li onClick={() => setActiveOption(option3) || setOpen(false)}>
            {" "}
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {option3}{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonClass;
