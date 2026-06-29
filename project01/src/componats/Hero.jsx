import '../App.css'

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

import React from 'react'

function Hero() {
  return (
    <div className="hero">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  )
}

export default Hero
