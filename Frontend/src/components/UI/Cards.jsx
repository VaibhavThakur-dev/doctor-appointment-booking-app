import React from 'react'

function Cards(props) {
  return (
    <>
        <div class="w-full md:w-80 h-96 px-4 border bg-white border-gray-300 rounded-xl shadow-lg hover:shadow-gray-700 duration-500">
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black ">{props.name}</h5>
    </a> 
    <img src={props.img} alt="" className='h-60 w-full mt-7 rounded-lg'/>
    <a href="#" class="inline-flex  font-medium items-center text-blue-600 hover:underline mt-8">
        See more -
    </a>
</div>
    </>
  )
}

export default Cards