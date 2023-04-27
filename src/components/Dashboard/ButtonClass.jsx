import React from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

const ButtonClass = ({open, setOpen, active, option1, option2, option3}) => {

  return (
    <div className="flex flex-col">
      <button
        className="w-[7rem] h-8 flex items-center justify-center border-slate-500 outline rounded-[10px] font-bold"
        onClick={() => setOpen(!open)}
      >
        {active}
        <BsArrowDownCircleFill size={17} className="ml-[5px]" />
      </button>

      <div
        className={` ${
          open ? "" : "hidden"
        } z-20 bg-white rounded-lg shadow w-[6rem] dark:bg-gray-700 mt-2`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            {" "}
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {option1}{" "}
            </a>
          </li>

          <li>
            {" "}
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {option2}{" "}
            </a>
          </li>

          <li>
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
