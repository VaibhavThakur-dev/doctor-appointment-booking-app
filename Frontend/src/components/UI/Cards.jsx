import React from 'react'

function Cards(props) {
  return (
    <>
        <div class="w-96 h-80 p-6 border border-green-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black dark:text-white">{props.name}</h5>
    </a> 
    <a href="#" class="inline-flex  font-medium items-center text-blue-600 hover:underline">
        See more -
    </a>
</div>
    </>
  )
}

export default Cards