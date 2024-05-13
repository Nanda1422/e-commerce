import SimpleImageSlider from "react-simple-image-slider";
import React from "react";


const images = [
  { url: "/images/Eb5.png" },
  { url: "/images/Eb2.png" },
  { url: "/images/Eb3.png" },
  { url: "/images/Eb4.png" },

];
const divStyle = {

  margin: '20px',
 
};

const ImgSlider4 = () => {
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

export default ImgSlider4;