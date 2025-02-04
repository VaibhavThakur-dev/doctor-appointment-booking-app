import React from 'react'
import { FaPhone, FaRegCalendarDays } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div id='home' className='w-full h-screen pt-[72px] flex flex-col items-center bg-green-100'>
          <div className="h-2/3 w-full bg-[url('assets/hos.jpg')] bg-cover bg-[60%]">
          </div>  
          <div className='w-full flex items-center justify-center text-center bg-green-300 py-3 gap-2'>
          <div className='duration-500 flex items-center  py-2 px-3 border rounded-3xl hover:bg-green-500'><FaPhone className='mr-1'/><button>Request a CallBack</button></div>
          <div className='duration-500 flex items-center  py-2 px-3 border rounded-3xl hover:bg-green-500'><FaRegCalendarDays className='mr-1'/><button>Book an Appointment</button></div>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center justify-evenly font-medium px-20 md:px-32 py-10 text-2xl gap-20'>
          <h1 className=''>fortis Hospital, INDIA</h1>
          <div className='duration-200 flex items-center px-3 py-1 bg-green-400 rounded-md hover:bg-green-600 text-white'><button>Find a Doctor</button></div>
          
        </div>
        
      </div>
      
    </>
  )
}

export default Home