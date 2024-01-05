import React, { useEffect, useRef } from 'react';
import styles from '../assets/styles/Projects.module.css';
import perfilImage from '../assets/images/perfil.png';

const About = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // Animation code here, for example:
    imgRef.current.animate(
      { opacity: [0, 1] },
      { duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    
      <div className={styles.aboutMe}>
        <img ref={imgRef} src={perfilImage} alt="Programmer" /> 
        <h2>About Me</h2>
        <p>
          I am a front-end programmer with a passion for building beautiful and
          intuitive user interfaces. I have experience with a variety of
          technologies, including HTML, CSS, JavaScript, and React.
        </p>
        <ul>     
          <li>
            <a href="https://github.com/GabrielMoraeswolf">Github</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/gabriel-moraes-8336a2199/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:gabrielrmoraes@outlook.com">Email</a>
          </li>
        </ul>
        <h2>Trajetória</h2>        
        <h3>Desenvolvedor Mobile - React Native - AWS Cloud Services</h3>
          <h4>Março 2023 - Agosto 2023</h4>
        <ul>
          <li>Deploy de aplicativos web e mobile.</li>
          <li>Prática do Scrum, realização de dailys e sprints.</li>
          <li>Realização de testes unitários com Jest e Vitest.</li>
          <li>Utilização de git e github para versionamento do código do produto.</li>
          <li>Desenvolvimento de aplicações completas em React JS, React Native e Typescript.</li>
          <li>Desenvolvimento de Ecommerce em aplicativo mobile com React Native e Typescript.</li>
          <li>Experiência na configuração e manutenção de serviços AWS, como hospedagem, Amazon EC2, auto scaling, load balancers, entre outros.</li>
        </ul> 
        
      </div>
    
  );
};

export default About;