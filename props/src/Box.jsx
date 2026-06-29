import React from 'react'
import './index.css'

function Box({name="Younus" , work="Web Developer"}) {
  return (
    <div className='hero'>
      <h1>{name}</h1>
      <h2>{work}</h2>
    </div>
  )
}

export default Box
