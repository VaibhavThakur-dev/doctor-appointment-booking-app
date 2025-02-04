import React from 'react'

function Button(props) {
  return (
    <button className="hidden md:flex bg-green-500 text-white px-8 py-2 rounded-md hover:bg-green-600 duration-300">
          {props.name}
        </button>
  )
}

export default Button