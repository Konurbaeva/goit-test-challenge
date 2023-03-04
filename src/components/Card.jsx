import React, { useState } from 'react';
import styled from 'styled-components';
import { LoadingLogo } from './LoadingLogo';
import '../Card.css';

const boyImg = require('../assets/Hansel.png');
const rectangle = require('../assets/Rectangle.png');
const ellipse = require('../assets/Ellipse.png');

// const CardWrapper = styled.div`
//   width: 300px;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
//   overflow: hidden;
// `;

// const CardImg = styled.img`
//   width: 100%;
//   height: auto;
//   display: block;
// `;

const CardWrapper = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardContent = styled.div`
  padding: 20px;
`;

// const CardParagraph = styled.div`
//   display: block;
//   margin-top: 20px;
//   background-color: #f44336;
//   color: #fff;
//   text-align: center;
//   padding: 10px;
//   border-radius: 5px;
//   text-decoration: none;

//   &:hover {
//     background-color: #d32f2f;
//   }
// `;
const CardParagraph = styled.div`
  display: block;
  margin-top: 20px;

  text-align: center;
  padding: 10px;
`;

const Button = styled.button`
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;
  display: block;
  margin-top: 20px;
  background-color: #f44336;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #d32f2f;
  }
`;

const Card = () => {
  const [text, setText] = useState('FOLLOW');

  const handleClick = () => {
    setText('FOLLOWING');
  };
  return (
    <CardWrapper>
      <CardContent>
        <LoadingLogo />
        <div className="image-container">
          <img src={rectangle} alt="logo" />
          <img src={boyImg} alt="logo" />
          <img src={ellipse} alt="logo" />
          <img src={rectangle} alt="logo" />
        </div>

        <CardParagraph>Tweets</CardParagraph>
        <CardParagraph>Followers</CardParagraph>
        <Button onClick={handleClick}>{text}</Button>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
