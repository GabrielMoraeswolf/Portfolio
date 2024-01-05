import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image1 from '../assets/images/creditation/typescript.jpg';
import Image2 from '../assets/images/creditation/unitTest.jpg';
import Image3 from '../assets/images/creditation/scrum.jpg';
import Image4 from '../assets/images/creditation/redux.jpg';
import Image5 from '../assets/images/creditation/hooks.jpg';
import Image6 from '../assets/images/creditation/jest.jpg';
import Image7 from '../assets/images/creditation/git.jpg';
import Image8 from '../assets/images/creditation/graphQL.jpg';
import Image9 from '../assets/images/creditation/fastLane.jpg';

const Carousel = () => {
    const images = [Image1, Image2, Image3,
                    Image4, Image5, Image6,
                    Image7, Image8, Image9]; 
  
    const settings = {
      infinite: true,
      speed: 2500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };
    const imageStyle = {
        maxHeight: '350px', // Defina a altura máxima desejada
       
    };
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Project ${index + 1}`} style={imageStyle}/>
          </div>
        ))}
      </Slider>
    );
  };
  export default Carousel;