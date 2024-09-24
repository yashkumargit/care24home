import React from 'react';
import './Callback.css';

const Callback = () => {
  return (
    <div className='callback-form-container'>
      <h2>Request a Callback</h2>
      <form className='callback-form'>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" placeholder="Sunil Saxena" className="text-input" />
          <hr />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone*</label>
          <input type="text" id="phone" placeholder="08069048802" className="text-input" />
          <hr />
        </div>
        
        <div className="form-group">
          <label htmlFor="city">Select Your City*</label>
          <select id="city" className="select-input">
            <option value="">--</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
          </select>
          <hr />
        </div>
        
        <div className="form-group">
          <label htmlFor="requirement">Requirement/ज़रूरत*</label>
          <textarea id="requirement" placeholder="Enter your requirement" className="textarea-input"></textarea>
          <hr />
        </div>
        
        <button type="submit" className="primary-button">Request a Callback</button>
      </form>
    </div>
  );
};

export default Callback;
