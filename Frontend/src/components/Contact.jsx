import React from 'react'
import Button from './UI/Button'
import D2 from "../assets/D2.jpg"

function Contact() {
  return (
    <>
      <div id='contact' className='w-full h-full flex flex-col items-center justify-center py-16 md:py-24'>
          <h1 className='text-4xl font-bold'>Contact</h1>
          
        <div className='w-full p-10 h-full flex md:flex-row flex-col md:space-x-10 space-y-10'>
          <form action="" className='border border-slate-900 rounded-xl shadow-xl shadow-slate-400 md:w-2/4 px-10 py-4'>
              <div className='py-2'>
                <input type="text" placeholder="Full Name" className='p-2 border border-slate-900 w-full'/>
              </div>
              <div className='py-2'>
                <input type="email" placeholder="Email" className='p-2 border border-slate-900 w-full'/>
              </div>
              <div className='py-2'>
                <input type="text" placeholder="Phone Number" className='p-2 border border-slate-900 w-full'/>
              </div>
              <div className='py-2'>
                <textarea name="" placeholder='message' className='p-2 border border-slate-900 w-full h-32'></textarea>
              </div >
              <div className="btn_box py-2">
                <Button name = "Send"/>
              </div>
            </form>
            <div className='md:w-2/4 border-spacing-2 h-full'>
              <img src={D2} alt="" className='rounded-2xl shadow-xl shadow-gray-400' />
            </div>

          </div>

      </div>
    </>
  )
}

export default Contact