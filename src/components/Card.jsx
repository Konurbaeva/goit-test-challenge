import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LoadingLogo } from './LoadingLogo';
import '../Card.css';

const boyImg = require('../assets/Hansel.png');
const rectangle = require('../assets/Rectangle.png');
const questions = require('../assets/picture-with-questions.png');

const CardWrapper = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #471CA9;
`;

const CardContent = styled.div`
  background-color: #471CA9;
`;

const CardParagraph = styled.div`
  display: block;
  text-align: center;
  padding: 5px;
  color: #EBD8FF;
  text-transform: uppercase;
`;


const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 6px;
width: 196px;
left: 92px;
top: 374px;

background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
margin-bottom:20px;
margin-left:35px;
text-transform: uppercase;
`;

const user = {
    imageUrl: boyImg,
    imageSize: 80,
  };

const Card = () => {
  const [followersCount, setFollowersCount] = useState(
    parseInt(localStorage.getItem('followersCount')) || 100500
  );
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
  };

  useEffect(() => {
    localStorage.setItem('followersCount', followersCount.toString());
  }, [followersCount]);

  return (
    <CardWrapper>
      <CardContent>
        <LoadingLogo />   
        <img src={questions} alt="questions" />
         <div style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         margin:'50px'
        }}>
         <img src={rectangle} alt="rectangle" className="rectangle"/>
          <img alt="boy"
           src={user.imageUrl}
            style={{
          width: user.imageSize,
          height: user.imageSize,
          textAlign: 'center',
          position: 'absolute',
          overflow: 'hidden'
        }} />
         </div>
          <img src={rectangle} alt="rectangle" className="rectangle"/>
          
        <CardParagraph>777 Tweets</CardParagraph>
        <CardParagraph>{followersCount} Followers</CardParagraph>
        <Button
          onClick={handleClick}
          style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
