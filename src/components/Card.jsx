import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LoadingLogo } from './LoadingLogo';
import '../Card.css';

const boyImg = require('../assets/Hansel.png');
const rectangle = require('../assets/Rectangle.png');
const ellipse = require('../assets/Ellipse.png');
const questions = require('../assets/picture-with-questions.png');

const CardWrapper = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #471CA9;
`;

const CardContent = styled.div`
  padding: 20px;
  background-color: pink;
`;

const CardParagraph = styled.div`
  display: block;
  margin-top: 20px;
  text-align: center;
  padding: 10px;
`;

// const Button = styled.button`
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   border: 2px solid white;
//   display: block;
//   margin-top: 20px;
//   background-color: #f44336;
//   color: #fff;
//   text-align: center;
//   border-radius: 5px;
//   text-decoration: none;
//   &:hover {
//     background-color: #d32f2f;
//   }
// `;

const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;
width: 196px;
left: 92px;
top: 374px;

background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
`;

const Card = () => {
  const [text, setText] = useState('FOLLOW');
  const [followersCount, setFollowersCount] = useState(
    parseInt(localStorage.getItem('followersCount')) || 100500
  );
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    setText('FOLLOWING');
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
  };

  useEffect(() => {
    localStorage.setItem('followersCount', followersCount.toString());
  }, [followersCount]);

  return (
    <CardWrapper>
      <CardContent>
        <LoadingLogo />
        <div className="image-container">
        <img src={questions} alt="logo" />
          <img src={rectangle} alt="logo" />
          <img src={boyImg} alt="logo" />
          <img src={ellipse} alt="logo" />
          <img src={rectangle} alt="logo" />
          
        </div>
        <CardParagraph>777 Tweets</CardParagraph>
        <CardParagraph>{followersCount} Followers</CardParagraph>
        <Button
          onClick={handleClick}
          style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
        >
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </Button>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
