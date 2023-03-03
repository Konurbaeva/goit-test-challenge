import React, { useState } from 'react';
import styled from 'styled-components'
import { LoadingLogo } from './LoadingLogo';

const boyImg = require('../assets/Hansel.png');

// import '../Card.css';

// function Card({ imageUrl, imageAlt, tweetsCount, followersCount, buttonText }) {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div className="card">
//       <img src={imageUrl} alt={imageAlt} />
//       <div className="card-content">
//         <p>{tweetsCount}</p>
//         <button className="followers-count">{followersCount}</button>
//         <button className="card-button" onClick={handleClick}>{buttonText}</button>
//       </div>
//     </div>
//   );
// }

// export default Card;

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`

const CardWrapper = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const CardLink = styled.a`
  display: block;
  margin-top: 20px;
  background-color: #f44336;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #d32f2f;
  }
`;


const Card = () => {
    return (
      <CardWrapper>
       
        <CardContent>
       <LoadingLogo/>
          <img  src={boyImg} alt="logo"/>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci magna.</CardText>
         
          <CardLink href="#">Tweets</CardLink>
          <CardLink href="#">Followers</CardLink>

        </CardContent>
      </CardWrapper>
    );
  };
  
  export default Card;