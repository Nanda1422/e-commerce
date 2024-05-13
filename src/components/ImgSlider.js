import React, { useState, useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer';

export default function ImgSlider() {
  const [imageNum, setImageNum] = useState(1);

  const sliderImages = [
    '/images/Master-banner-Horizontal.jpg',
    '/images/offers-mobile-banner.jpg',
    '/images/Offers.png',
  ];
  const StyledSimpleImageSlider = styled(SimpleImageSlider)`
  img {
    object-fit: contain; 
  }
`;

  const { ref, width, height } = useResizeObserver();

  const handleStartSlide = (index, length) => {
    setImageNum(index);
  };

   return (
    <SliderContainer ref={ref} className="card_imgbox" style={{ width: '97%', height: '520px' }}>
      <StyledSimpleImageSlider
        width={width}
        height={height}
        images={sliderImages}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
        onStartSlide={handleStartSlide}
        autoPlayDelay={3}
        className="image-slider"
      />
    </SliderContainer>
   );
}

const SliderContainer = styled.div`
  display: flex;
  width: 97%;
  justify-content: center;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 23px;
  position: relative;

  &:hover {
    cursor: grab;
    background-color: black;
    transition-delay: 200ms;
    transition: all 1s ease-in-out;
    transform: scale(1.03);
    box-shadow: rgb(41, 39, 39);
    opacity: 0.9;
  }
`;
