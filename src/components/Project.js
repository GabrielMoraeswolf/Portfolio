
import React from 'react';
import styles from '../assets/styles/Projects.module.css';

const Project = ({ title, description, video, link }) => {
  return (
    <div>
      <h3>{title}</h3>
      <video controls className={styles.projectVideo}>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <p className={styles.descriptionProject} style={{ textAlign: 'justify' }}>
        {description}{' '}
        {link && (
          <div className={styles.linkContaier}>
            <a className={styles.linkProject} href={link} target="_blank" rel="noopener noreferrer">
              Acesse o Projeto
            </a>
          </div>
        )}
      </p>
    </div>
  );
};

export default Project;