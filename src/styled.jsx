import styled from 'styled-components'

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

const CardTitle = styled.h2`
  font-size: 24px;
  margin-top: 0;
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
