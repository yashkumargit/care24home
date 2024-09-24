import React, { useState } from 'react';
import './Main.css';
import patient from "../Assets/patient.png";
import whatsapp from '../Assets/whatsapp.webp'
const Main = () => {
  const [category, setCategory] = useState("care");

  return (
    <>
    <div className='main-box'>
      <div className="main-category">
        <ul>
          <li 
            onClick={() => setCategory("care")} 
            className={category === "care" ? "active" : ""}
          >
            Caregiver / Elderly Care  <hr />
          </li>
          <li 
            onClick={() => setCategory("Nurse")} 
            className={category === "Nurse" ? "active" : ""}
          >
            Nurse <hr /> 
          </li>
          <li 
            onClick={() => setCategory("Physiotherapy")} 
            className={category === "Physiotherapy" ? "active" : ""}
          >
            Physiotherapy <hr/>
          </li>
          <li 
            onClick={() => setCategory("BabyCare")} 
            className={category === "BabyCare" ? "active" : ""}
          >
            Baby Care <hr />
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="main-left">
          <span className='main-left-span1'>Hire our </span><span className='main-left-span2'>Verified Caregivers</span>
          <p>Hire skilled and trusted caregivers from Care24 to provide best home healthcare for your loved ones.</p>
            <ul className='main-points'>
              <li>Oral hygiene and bed bath/sponge</li>
              <li>Cleanliness of patient's room</li>
              <li>Feeding and bathroom assistance</li>
              <li>Light massage (10-15 mins)</li>
            </ul>
          <button className='primary-button'>Book now & save up to 20%!</button>
        </div>
        <div className="main-right">
          <img src={patient} alt="patient" />
        </div>
      </div>
    </div>
    <div className='whatsapp-image'>
      <img src={whatsapp} alt="" />
    </div>
    </>
  );
};

export default Main;
