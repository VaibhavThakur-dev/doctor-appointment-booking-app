import React from 'react'
import Cards from "./Ui/Cards";

function Team() {
  return (
    <>
      <div id='team'  className='flex flex-col bg-[#e8f6ff] items-center justify-center py-16 md:py-24 gap-y-5'>
      <h1 className='text-3xl font-bold '>OUR-TEAM</h1>
        <div className=" w-full flex justify-center flex-col md:flex-row md:gap-x-8 gap-y-4 px-8 md:p-0">
          <Cards name = "Mr.Rajesh"/>
          <Cards name = "Mr.Vaibhav"/>
          <Cards name = "Mr.Vishal"/>
        </div>
      </div>
    </>
  )
}

export default Team