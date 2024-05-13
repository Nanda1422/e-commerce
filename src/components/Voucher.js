
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ImageSources = [
  '/images/mobivik.png',
  '/images/offer2.png',
  '/images/voucher2.png',
  '/images/voucher3.png',
  '/images/voucher4.png',
  '/images/voucher5.jpg',
  '/images/voucher6.png'
];

function Voucher() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleAutoplay = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageSources.length);
    };
    const autoplayInterval = setInterval(handleAutoplay,2000);
    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <Container>
      <ImageSlider currentIndex={currentIndex}>
        {ImageSources.map((source, index) => (
          <Image key={index} src={source} alt="" />
        ))}
      </ImageSlider>
    </Container>
  );
}

export default Voucher;

const Container = styled.div`
  width: 97%;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  height:150px;
  overflow: hidden;
`;

const ImageSlider = styled.div`
  display:flex;
  animation: ${slideAnimation} 30s linear infinite;
  height: 100%;
  width: ${props => props.width}px;
`;

const Image = styled.img`
  width: ${props => props.width}px;
  height: auto;
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

