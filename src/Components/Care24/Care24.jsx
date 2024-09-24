import React from 'react'
import './Care24.css'
import doctor from '../Assets/doctor.webp'
import Callback from '../Callback/Callback'
const Care24 = () => {
  return (
    <>
    <div className='care24-box'>
        <div className="care24-left">
            <img src={doctor} alt="" />
        </div>
        <div className="care24-right">
            <Callback/>
        </div>

    </div>
    </>
  )
}

export default Care24 