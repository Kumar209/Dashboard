import React, { useState } from "react";
import avatar from "../../assests/kk.png";
import { CgTikcode } from "react-icons/cg";
import { IoBookSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { ImClipboard } from "react-icons/im";
import { BiFile } from "react-icons/bi";
import { MdOutlineAssignment } from "react-icons/md";
import { FaGraduationCap, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden relative w-full h-[80px] bg-[#071b63] text-white">
        <div className="flex items-center justify-end pt-3 mr-4">
          <span className="avatar w-[50px] h-[50px] rounded-full">
            <img src={avatar} alt="" />
          </span>
          <h1 className="ml-4 font-bold cursor-pointer">Hello, Teacher</h1>
        </div>

        <div className="flex">
          <FaBars size={25} className="absolute top-7 left-5 cursor-pointer" onClick={() => setOpen(!open)}/>
        </div>



        <div className={`${open? "block" : "hidden"} bg-[#071b63] flex flex-col items-center w-full pt-10 pl-20`}>
          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <CgTikcode
              size={22}
              className={`mr-2 mt-1 ${
                active === 1 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 1 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(1)}
            >
              Dashboard
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <IoBookSharp
              size={22}
              className={`mr-2 mt-1 ${
                active === 2 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 2 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(2)}
            >
              Classes
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <IoIosPeople
              size={22}
              className={`mr-2 mt-1 ${
                active === 3 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 3 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(3)}
            >
              All Students
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <ImClipboard
              size={22}
              className={`mr-2 mt-1 ${
                active === 4 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 4 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(4)}
            >
              Attendence
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <BiFile
              size={22}
              className={`mr-2 mt-1 ${
                active === 5 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 5 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(5)}
            >
              Lesson Plan
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <MdOutlineAssignment
              size={22}
              className={`mr-2 mt-1 ${
                active === 6 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 6 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(6)}
            >
              Assignments
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <FaGraduationCap
              size={22}
              className={`mr-2 mt-1 ${
                active === 7 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 7 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(7)}
            >
              Exams
            </span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:fixed w-[315px] h-[100vh] bg-[#071b63] text-white">
        <div className="flex flex-col items-center justify-center pt-10">
          <span className="avatar w-[30%] h-[30%] rounded-full">
            <img src={avatar} alt="" />
          </span>
          <h1 className="pt-3 font-lightbold">Hello, Teacher</h1>
        </div>

        <div className="flex flex-col items-center w-full pt-10 pl-20">
          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <CgTikcode
              size={22}
              className={`mr-2 mt-1 ${
                active === 1 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 1 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(1)}
            >
              Dashboard
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <IoBookSharp
              size={22}
              className={`mr-2 mt-1 ${
                active === 2 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 2 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(2)}
            >
              Classes
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <IoIosPeople
              size={22}
              className={`mr-2 mt-1 ${
                active === 3 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 3 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(3)}
            >
              All Students
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <ImClipboard
              size={22}
              className={`mr-2 mt-1 ${
                active === 4 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 4 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(4)}
            >
              Attendence
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <BiFile
              size={22}
              className={`mr-2 mt-1 ${
                active === 5 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 5 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(5)}
            >
              Lesson Plan
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <MdOutlineAssignment
              size={22}
              className={`mr-2 mt-1 ${
                active === 6 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 6 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(6)}
            >
              Assignments
            </span>
          </div>

          <div className="flex items-center justify-start cursor-pointer w-full mb-6">
            <FaGraduationCap
              size={22}
              className={`mr-2 mt-1 ${
                active === 7 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
            />
            <span
              className={`font-semibold text-xl pr-10 ${
                active === 7 ? "text-[white]" : "text-[#C4C4C4]"
              }`}
              onClick={() => setActive(7)}
            >
              Exams
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
