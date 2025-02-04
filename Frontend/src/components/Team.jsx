import React from 'react'
import Cards from "./Ui/Cards";

function Team() {
  return (
    <>
      <div id='team'  className='flex flex-col bg-green-100 items-center justify-center py-16 md:py-24'>
      <h1 className='text-3xl font-bold'>OUR-TEAM</h1>
        <div className="flex justify-center items-center flex-col py-20 gap-y-8 md:gap-x-8 md:flex-row flex-wrap ">
          <Cards name = "Mr.Rajesh"/>
          <Cards name = "Mr.Vaibhav"/>
          <Cards name = "Mr.Vishal"/>
        </div>
      </div>
    </>
  )
}

export default Team