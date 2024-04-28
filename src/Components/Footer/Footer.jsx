import React from 'react'
import './Footer.css'
import power from "../../Assets/Group 1.svg";

const Footer = () => {
  return (
    <div className='hidden'>
       <div className="power-footer">
            <img src={power} alt="" />
            <h2>Powere by AI</h2>
          </div>

    </div>
  )
}

export default Footer