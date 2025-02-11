import React from 'react'

function Cards(props) {
  return (
    <>
        <div class="w-full md:w-80 h-96 px-4 border bg-white border-slate-400 rounded-xl shadow-lg shadow-slate-500  ">
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black ">{props.name}</h5>
    </a> 
    <a href="#" class="inline-flex  font-medium items-center text-blue-600 hover:underline">
        See more -
    </a>
</div>
    </>
  )
}

export default Cards