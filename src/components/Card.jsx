import React, { useState } from 'react';
import '../Card.css';


function Card({ imageUrl, imageAlt, tweetsCount, followersCount, buttonText }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="card">
      <img src={imageUrl} alt={imageAlt} />
      <div className="card-content">
        <p>{tweetsCount}</p>
        <p>{followersCount}</p>
        <button className="card-button" onClick={handleClick}>Clicked {count} times {buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
