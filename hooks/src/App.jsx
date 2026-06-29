import { useState } from "react";
import './App.css'
import React from 'react'

function App() {
  let [count,setcount]=useState(0)
  return (
    <>
    <h1>{count}</h1>

    <div className="btn">

      <button onClick={()=>setcount(count+1)}>Increase</button>
      <button onClick={()=>setcount(count-1)}>Decreace</button>
    </div>
    </>
  )
  console.log(count);
}

export default App

