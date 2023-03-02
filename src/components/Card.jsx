import React from 'react';
import './Card.css';

function Card({ imageUrl, imageAlt, tweetsCount, followersCount, buttonText }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={imageAlt} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{tweetsCount}</p>
        <p>{followersCount}</p>

        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
