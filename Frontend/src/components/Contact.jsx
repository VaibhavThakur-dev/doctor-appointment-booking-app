import React from 'react'
import Button from './UI/Button'

function Contact() {
  return (
    <>
      <div id='contact' className='w-full h-screen flex flex-col items-center justify-center bg-[#e8f6ff]'>
          <h1 className='text-4xl font-bold p-10'>Contact</h1>
            <form action="" className='border border-slate-900 rounded-xl shadow-xl shadow-slate-400 md:w-2/4 px-10 py-4'>
              <div className='py-3'>
                <input type="text" placeholder="Full Name" className='p-4 border border-slate-900 w-full'/>
              </div>
              <div className='py-3'>
                <input type="email" placeholder="Email" className='p-4 border border-slate-900 w-full'/>
              </div>
              <div className='py-3'>
                <input type="text" placeholder="Phone Number" className='p-4 border border-slate-900 w-full'/>
              </div>
              <div className='py-3'>
                <textarea name="" placeholder='message' className='p-4 border border-slate-900 w-full h-32'></textarea>
              </div >
              <div className="btn_box py-4">
                <Button name = "Send"/>
              </div>
            </form>

      </div>
    </>
  )
}

export default Contact