import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';




  const images = [
    'https://www.linkpicture.com/q/slide_1.png',
    'https://www.linkpicture.com/q/slide2_6.png',
    'https://www.linkpicture.com/q/slide3_3.png'
  ];


const zoomInProperties = {
  indicators: true,
  scale: 1.4
}

const Slideshow = () => {

  return (
    <div>
    <Zoom {...zoomInProperties}>
      {images.map((each, index) => (
        <div key={index} style={{width: "100%"}}>
          <img style={{ objectFit: "cover", width: "100%",backgroundsize: "cover",height:"500px" }} src={each} />
        </div>
      ))}
    </Zoom>
  </div>
  )
}

export default Slideshow