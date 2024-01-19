import React, { useEffect, useRef } from 'react';
import styles from '../assets/styles/Projects.module.css';
import perfilImage from '../assets/images/perfil.png';
import gitIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import instagramIcon from '../assets/icons/instagram.png';
import emailIcon from '../assets/icons/envelope.png';
import TechStack from '../components/TechStack';
const About = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    imgRef.current.animate(
      { transform: ['translateY(30px)', 'translateY(0px)'] },
      { duration: 1500, delay: 450 }
    );
  }, []);

  return (   
    <div className={styles.aboutMe}>

      <ul className={styles.buttonListHeader}>
        <li>
          <div className={styles.buttonContainer}>
            <a className={styles.buttonRect} href="#sobreMim">Sobre Mim</a>
          </div>
        </li>
        <li>
          <div className={styles.buttonContainer}>
            <a className={styles.buttonRect} href="#trajetoria">Trajetória</a>
          </div>
        </li>
        <li>  
          <div className={styles.buttonContainer}>
            <a className={styles.buttonRect} href="#projetos">Projetos</a>
          </div>
        </li>
        <li>
          <div className={styles.buttonContainer}>
            <a className={styles.buttonRect} href="#certificados">Certificados</a>
          </div>
        </li>
      </ul>

      <img ref={imgRef} src={perfilImage} alt="Programmer" /> 
        
      <div className={styles.aboutMeText} style={{ textAlign: 'justify' }}>
        
        <h2 id="sobreMim" className={styles.underline}>Sobre mim</h2>
          <p>
            Olá me chamo Gabriel Moraes, formado em Ciência da Computação pela Universidade Federal de Ouro Preto (UFOP),
            Sou desenvolvedor Front-end, atuo com a criação de software para Web e aplicativos mobile, além disso, busco 
            contribuir ativamente para o desenvolvimento de aplicações robustas e eficientes, aproveitando minha certificação 
            AWS e conhecimentos em Cyber Security e Back-end (SQL, Node.JS).
          </p>
          <p>
            Este é o meu site que utilizo para me apresentar e mostrar minhas qualidades, especialidades e minhas experiências
            adquiridas em minha jornada aqui como desenvolvedor Jr.
          </p>        
          <p>Veja meu 
          <a className={styles.portfolioLink} href="#projetos">portfólio</a>
            

          </p>
      </div>   
      <ul className={styles.buttonList}>
        <li>
          <a href="https://github.com/GabrielMoraeswolf">
            <img src={gitIcon} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/gabriel-rodrigues-de-moraes/">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gabriel.moraesw/">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="mailto:gabrielrmoraes@outlook.com">
            <img src={emailIcon} alt="Email" />
          </a>
        </li>
      </ul>
      <div className={styles.aboutMeTraje}>
        <h2 id="trajetoria" className={styles.underline}>Trajetória</h2>        
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
      <div className={styles.containerTech}>
        <h3>Algumas tecnologias que tenho trabalho recentemente:</h3>
        <TechStack />
      </div>
    </div>
    
  );
};

export default About;