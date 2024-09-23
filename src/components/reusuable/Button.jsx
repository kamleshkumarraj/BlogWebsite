import React from 'react'

function Button({label , width , height}) {
  return (
    <div className='grid place-content-center hover:cursor-pointer' style={{width: width, height: height}}>
      <p>{label}</p>
    </div>
  )
}

export default Button
