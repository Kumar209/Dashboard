import React from 'react'

const Attendance = () => {
  return (
    <div className='lg:w-[420px] h-[180px] ml-3 lg:ml-7 rounded-[15px] shadow-3xl'>
      <div className='flex justify-between px-4 py-3'>
        <span className='font-semibold'>Attendance Overview</span>
        <span className='font-semibold'>Class 6A</span>
      </div>

      <div className='mt-4 flex justify-between px-4 h-[6rem]'>
        <div className='flex flex-col items-center w-1/3'>
            <span className='font-bold text-3xl lg:text-4xl text-[#071B63]'>31</span>
            <span className='font-medium text-[14px] lg:text-[17px] text-[#4C4C4C]'>Total Students</span>
        </div>

        <div className='flex flex-col items-center w-1/3 border-x-2'>
            <span className='font-bold text-3xl lg:text-4xl text-[#071B63]'>24</span>
            <span className='font-medium text-[14px]  lg:text-[17px] text-[#4C4C4C]'>Present</span>
        </div>

        <div className='flex flex-col items-center w-1/3'>
            <span className='font-bold text-3xl lg:text-4xl text-[#071B63]'>7</span>
            <span className='font-medium text-[14px]  lg:text-[17px] text-[#4C4C4C]'>Absent</span>
        </div>
      </div>
    </div>
  )
}

export default Attendance
