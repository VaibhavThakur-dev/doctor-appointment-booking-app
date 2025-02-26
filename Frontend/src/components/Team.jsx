import React from 'react'
import Cards from "./Ui/Cards";
import D2 from "../assets/D2.jpg"
import D3 from "../assets/D3.jpg"
import D5 from "../assets/D5.jpg"
import D6 from "../assets/D6.jpg"

function Team() {
  return (
    <>
      <div id='team'  className='flex flex-col items-center justify-center py-16 md:py-24 gap-y-5 md:gap-y-24'>
      <h1 className='text-3xl font-bold '>OUR-TEAM</h1>
        <div className="flex flex-wrap justify-center flex-col md:flex-row md:gap-x-8 gap-y-4 px-8 md:p-0">
          <Cards name = "Mr.Vaibhav" img ={D2} />
          <Cards name = "Mr.halena" img ={D6}/>
          <Cards name = "Mr.alizabeth" img ={D3}/>
          <Cards name = "Mr.Victoria" img ={D5}/>
        </div>
      </div>
    </>
  )
}

export default Team