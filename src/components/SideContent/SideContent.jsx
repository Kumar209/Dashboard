import React from 'react';
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { RiMessageLine } from "react-icons/ri";

const SideContent = () => {
  return (
    <div className='w-[280px] h-screen bg-[#83ADFF]'>
        <div className='flex mt-8 px-5 justify-evenly'>
            <span className='bg-white w-[40px] h-[40px] rounded-md flex items-center justify-center cursor-pointer shadow-3xl'><AiOutlineBell size={22}/></span>
            <span className='bg-white w-[40px] h-[40px] rounded-md flex items-center justify-center cursor-pointer shadow-3xl'><RiMessageLine /></span>
            <span className='bg-white w-[40px] h-[40px] rounded-md flex items-center justify-center cursor-pointer shadow-3xl'><AiOutlineSetting /></span>
        </div>
    </div>
  )
}

export default SideContent