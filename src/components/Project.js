
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../assets/styles/Projects.module.css';

const Project = ({ images,title,description }) => {
    const settings = {
      infinite: true,
      speed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      vertical: true,
    };
  
    return (
      <div>
        <h3>{title}</h3>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Project ${index + 1}`} className={styles.projectImage} />
            </div>
          ))}
        </Slider>
        <p className={styles.descriptionProject} style={{ textAlign: 'justify' }}>
          {description}
        </p>
      </div>
    );
  };
  

export default Project;
