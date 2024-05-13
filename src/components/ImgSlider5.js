import SimpleImageSlider from "react-simple-image-slider";
import React from "react";


const images = [
  { url: "/images/Bb1.png" },
  { url: "/images/Bb2.png" },
  { url: "/images/Bb3.png" },
  { url: "/images/Bb4.png" },

];
const divStyle = {

  margin: '20px',
 
};

const ImgSlider5 = () => {
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

export default ImgSlider5;