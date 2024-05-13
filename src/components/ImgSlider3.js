import SimpleImageSlider from "react-simple-image-slider";
import React from "react";


const images = [
  { url: "/images/Wf7.png" },
  { url: "/images/Wf6.png" },
  { url: "/images/Wf2.png" },
  { url: "/images/Wf5.png" },

];
const divStyle = {

  margin: '20px',
 
};

const ImgSlider3 = () => {
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

export default ImgSlider3;