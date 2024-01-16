import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image1 from '../assets/images/aws/AWS.jpg';
import Image2 from '../assets/images/aws/technical.png';
import Image3 from '../assets/images/aws/practitioner.png';
import Image4 from '../assets/images/aws/Bootcamp.jpg';

const AWSCarousel = () => {
    const images = [Image1, Image2, Image3,Image4]; 
  
    const settings = {
      infinite: true,
      speed: 2500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 768, // Largura de tela em que as configurações abaixo serão aplicadas
          settings: {
            slidesToShow: 1, // Altera a quantidade de slides exibidos para 2 em telas menores que 768px
          }
        }
      ]
    };
    const imageStyle = {
        maxHeight: '350px', // Defina a altura máxima desejada
        width: '100%',

       
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
  export default AWSCarousel;
