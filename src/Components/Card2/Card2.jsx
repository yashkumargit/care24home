// Card.js
import React from 'react';
import './Card2.css'; // Styles for the card

const Card2 = ({ title, content, imageSrc, isFeatured }) => {
  return (
    <div className="card">
      {isFeatured && <span className="card-featured">Featured</span>}
      <img src={imageSrc} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card2;
