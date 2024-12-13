import React from 'react'

const Button = (props) => {
  return (
    <div>
         <button className="px-4 py-2 transition-all rounded-md bg-brightRed hover:bg-white hover:text-black hover:scale-105">
          {props.title}
        </button>
    </div>
  )
}

export default Button