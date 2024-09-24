import React from 'react'
import google from '../Assets/Google-1.png'
import justdial from '../Assets/Justdial-1.png'
import Lybrate from '../Assets/Lybrate-1.png'
import heroright from '../Assets/heroright.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-left">
            <h1 className='hero-h1'>
            Largest Home
            </h1>
            <h1 className='hero-h1'>
            Healthcare Service
            </h1>
            <h1 className='hero-h1'>
             Provider In
            </h1>
            <span>Mumbai & Delhi</span>
            <p>Your health & wellness, our priority: Experience personal care & support with Care24.</p>
            <button className='primary-button'>
                Request a call back
            </button>
            <div className='hero-stars'>
                <img src={google} alt="" />
                <img src={justdial} alt="" />
                <img src={Lybrate} alt="" />
            </div>
        </div>

        <div className="hero-right">
            <img src={heroright} alt="" />
        </div>
    </div>
  )
}

export default Hero