import React, { useState } from 'react';
import ButtonClass from "./ButtonClass.jsx";
import { FcShare } from "react-icons/fc";

const StudyMaterial = () => {
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

  return (
    <div className='ml-8 w-[410px] h-[510px] rounded-[15px] shadow-3xl'>
        <div className='pl-4 pt-3 font-semibold'>
            <span>Study Material</span>
        </div>

        <div className="flex pl-4 pt-2 gap-3">
          <ButtonClass open={open2} setOpen={setOpen2} active="Class 8" option1="Class 6" option2="Class 7" option3="Class 9"/>
          <ButtonClass open={open3} setOpen={setOpen3} active="Section A" option1="Section B" option2="Section C" option3="Section D"/>
        </div>

        <div className='pt-5 px-5'>
          <StudyDiv title="NCERT Mathematics.pdf"/>
          <StudyDiv title="NCERT Mathematics.pdf"/>
          <StudyDiv title="NCERT Mathematics.pdf"/>
          <StudyDiv title="NCERT Mathematics.pdf"/>
          <StudyDiv title="NCERT Mathematics.pdf"/>
          <StudyDiv title="NCERT Mathematics.pdf"/>
        </div>

        <div className='flex justify-end pr-5 mb-5'>
          <span className='underline font-bold cursor-pointer'>View All</span>
        </div>
    </div>
  )
}

const StudyDiv = (props) => {
    return (
        <div className='px-3 mb-5 flex justify-between items-center  h-[40px] cursor-pointer rounded-[5px] shadow-2xl'>
            <span>{props.title}</span>
            <FcShare size={20}/>
        </div>
    )
}

export default StudyMaterial