import React, { useState } from 'react';
import ButtonClass from "./ButtonClass";
import avatar from "../../assests/avatar.png"

const StudentPerformance = () => {
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);

  return (
    <div className='mt-[2rem] w-[420px] h-[400px] ml-7 rounded-[15px] shadow-3xl'>
        <div className='pl-4 mb-1 pt-3 font-semibold'>
            <span>Student's Perfomance</span>
        </div>

        <div className="flex pl-4 pt-2 gap-3">
          <ButtonClass open={open4} setOpen={setOpen4} active="Class 8" option1="Class 6" option2="Class 7" option3="Class 9"/>
          <ButtonClass open={open5} setOpen={setOpen5} active="Section A" option1="Section B" option2="Section C" option3="Section D"/>
          <ButtonClass open={open6} setOpen={setOpen6} active="Below 50%" option1="Above 90%" option2="Above 70%" option3="Below 30%"/>
        </div>

        <div className='pt-7 px-5'>
          <Student name="Prashant Kumar" marks="45%"/>
          <Student name="Mahek Singh" marks="35%"/>
          <Student name="Lokesh Joshi" marks="25%"/>
        </div>


        <div className='flex justify-end pr-5 mb-5'>
          <span className='underline font-bold cursor-pointer'>View All Students</span>
        </div>
    </div>
  )
}

const Student= (props) => {
    return (
        <div className='px-3 mb-5 flex justify-between items-center h-[60px] cursor-pointer rounded-[5px] shadow-2xl'>
            <div className="flex items-center">
              <div className='w-[40px] h-[40px] rounded-[50%]'>
                <img src={avatar} alt=""/> 
              </div>
              <span className='font-medium ml-5'>{props.name}</span>
            </div>
            <span>{props.marks}</span>
        </div>
    )
}

export default StudentPerformance