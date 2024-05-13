import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ImageSources = [
  '/images/Ex1.png',
  '/images/Ex2.png',
  '/images/Ex3.png',
  '/images/Ex4.png',
  '/images/Ex5.png'
];

function Deals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleAutoplay = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageSources.length);
    };
    const autoplayInterval = setInterval(handleAutoplay, 2000);
    return () => clearInterval(autoplayInterval);
  }, []); 

  return (
    <Container>
      <ImageSlider currentIndex={currentIndex} >
        {ImageSources.map((source, index) => (
          <Image key={index} src={source} alt="" />
        ))}
      </ImageSlider>
    </Container>
  );
}

export default Deals;

const Container = styled.div`
  width: 97%;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  
`;

const ImageSlider = styled.div`
  display: flex;
  animation: ${slideAnimation} 30s linear infinite;
  animation-fill-mode: forwards;
  width: 100%; 
`;

const Image = styled.img`
  width: ${props => props.width}px;
  height: 300px;
  object-fit: Contain;
  margin-right: 30px;
  border-radius: 10px;
 
  &:hover { 
      cursor:grab;
      background-color:black;
      transition-delay:200ms;
      transition: all 1s ease-in-out;
      transform: scale(1.03);
      box-shadow:2px 2px 3px 3px rgb(41, 39, 39);
      opacity: 0.9;
    }
`;



