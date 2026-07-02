import React from 'react'
import Nav from './componants/Nav'
import Foot from './componants/Foot'
import { Outlet } from 'react-router-dom'



const App = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Foot/>
    </div>
  )
}

export default App
