import React from 'react'

const Header = () => {
  return (
<div className="mt-0 flex items-center justify-between">
  <h1 className='text-2xl'>
    Hello <br /> <span className='text-3xl font'>Younus'👋'</span> 
  </h1>
  <button className='p-6 bg-red-600 font-medium border-2 border-red-50 '>Log Out</button>
</div>
  )
}

export default Header
