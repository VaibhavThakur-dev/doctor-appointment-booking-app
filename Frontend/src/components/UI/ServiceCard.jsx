import React from 'react'

function ServiceCard(props) {
  return (
    <>
        <div className='h-72 w-56 border border-black rounded-lg flex flex-col items-center pt-16 bg-white shadow-lg shadow-gray-300 duration-500 hover:shadow-gray-700'>
                <img src={props.img} alt="" className='h-1/2 w-1/2 mb-8'/>
                <h2 className='text-2xl'>{props.name}</h2>
              </div>
    </>
  )
}

export default ServiceCard