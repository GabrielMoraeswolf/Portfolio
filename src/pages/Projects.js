import React from 'react';
import styles from '../assets/styles/Projects.module.css';

const Project = (props) => {
  return (
    <div className={styles.projectCard}>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>{props.description}</p>
    </div>
  );
}

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'This is a description of project 1.',
      image: 'https://via.placeholder.com/300x200.png?text=Project+1'
    },
    {
      name: 'Project 2',
      description: 'This is a description of project 2.',
      image: 'https://via.placeholder.com/300x200.png?text=Project+2'
    },
    {
      name: 'Project 3',
      description: 'This is a description of project 3.',
      image: 'https://via.placeholder.com/300x200.png?text=Project+3'
    }
  ];

  return (
    <div className={styles.project}>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default Projects;