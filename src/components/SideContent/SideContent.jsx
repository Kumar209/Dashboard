import React from 'react';
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { RiMessageLine } from "react-icons/ri";
import Report from "./Report.jsx";

const SideContent = () => {
  return (
    <div className='w-full flex lg:block mt-5 lg:mt-0 bg-[#83ADFF]'>
        <div className='flex flex-col lg:flex-row mt-8 py-3 pl-5 lg:py-0 lg:pl-0 gap-3 lg:justify-evenly'>
            <span className='bg-white w-[40px] h-[40px] rounded-md flex items-center justify-center cursor-pointer shadow-3xl'><AiOutlineBell size={22}/></span>
            <span className='bg-white w-[40px] h-[40px] rounded-md flex items-center justify-center cursor-pointer shadow-3xl'><RiMessageLine /></span>
            <span className='bg-white w-[40px] h-[40px] rounded-md flex items-center justify-center cursor-pointer shadow-3xl'><AiOutlineSetting /></span>
        </div>
        
        <div className="w-full flex justify-center mt-11">
          <Report />
        </div>
    </div>
  )
}

export default SideContent