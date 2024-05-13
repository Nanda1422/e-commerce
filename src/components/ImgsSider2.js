import SimpleImageSlider from "react-simple-image-slider";
import React from "react";
import { createGlobalStyle } from "styled-components";

const images = [
  { url: "/images/MF5.png" },
  { url: "/images/MF2.png" },
  { url: "/images/MF3.png" },
  { url: "/images/MF6.png" },

];
const divStyle = {

  margin: '20px',
 
};

const ImgSlider2 = () => {
  return (
    <div style={divStyle}>
      <SimpleImageSlider
        
        width="97%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export default ImgSlider2;

