import React, { useState } from 'react'

const Login = () => {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const subithandler =(e)=>{
    e.preventDefault()
    console.log("The Email your Entered is ",email);
    console.log("The Email your Entered is ",password);
    setEmail("")
    setPassword("")
     
}



  return (
   
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-600 p-20">
        <form  onSubmit={(e)=>{
            subithandler(e)
        }} 
        className="flex flex-col items-center justify-center gap-5">
          <input
          value={email}
          onChange={(e)=>{
            
            setEmail(e.target.value)
          }}
           required 
           className="border-2 border-blue-600 outline-none bg-transparent text-xl rounded-full py-3 px-5 placeholder:text-white w-80" type="email" placeholder="Enter your Email"/>


          <input 
                 value={password}
          onChange={(e)=>{
            
            setPassword(e.target.value)
          }}
          required className="border-2 border-blue-600 outline-none bg-transparent text-xl rounded-full py-3 px-5 placeholder:text-white w-80" type="password" placeholder="Enter Password"/>

          <button type="submit" className="w-80 bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-3 rounded-full transition duration-300">
             Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login