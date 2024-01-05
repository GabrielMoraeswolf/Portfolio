import React from 'react';
import Carousel from '../components/Carousel';
import AWSCarousel from '../components/AWSCarousel';
import styles from '../assets/styles/Projects.module.css';
const Certificados = () => {
    return (
        <div className={styles.certificados}>
            <h3>Certificados</h3>
            <Carousel />
            <div className={styles.aws}>
             <AWSCarousel />
            </div>
            
        </div>
    );
};
export default Certificados;