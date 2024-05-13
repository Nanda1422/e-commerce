import React from 'react';
import styled from 'styled-components';

const Images = [
  '/images/Bs1.png',
  '/images/Bs2.png',
  '/images/Bs3.png',
  '/images/Bs4.png',
  '/images/Bs5.png',
  '/images/Bs6.png'
];

function Bestsellers() {
  return (
    <Container>
      <Card>
        {Images.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Bestseller ${index + 1}`}
          />
        ))}
      </Card>
    </Container>
  );
}

export default Bestsellers;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
 margin-left: 110px;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
 
`;

const Image = styled.img`
  width: 400px;
  height: 500px;
  margin-bottom: 30px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  margin-right: 50px;
  margin-top: 30px;
  border: 3px solid #e0e0e0;
  justify-content:space-around;
  &:hover {
    transform: scale(1.03);
    transition-delay:200ms;
    transition: all 1s ease-in-out;
    cursor: pointer;
    box-shadow:2px 2px 3px 3px rgb(41, 39, 39);
  }
`;
