import React from 'react';
import styles from '../assets/styles/Projects.module.css';
import reactIcon from '../assets/icons/data/react.png';
import awsIcon from '../assets/icons/data/aws.png';
import javascriptIcon from '../assets/icons/data/javascript.png';
import jestIcon from '../assets/icons/data/jest.png';
import mongodbIcon from '../assets/icons/data/mongodb.png';
import nestIcon from '../assets/icons/data/nest.png';
import nextIcon from '../assets/icons/data/nextjs.png';
import nodeIcon from '../assets/icons/data/node.png';
import typescriptIcon from '../assets/icons/data/typescript.png';
import vitestIcon from '../assets/icons/data/vitest.png';

const TechStack = () => {
  const technologies = [
    { name: 'React JS', icon: reactIcon },
    { name: 'React Native', icon: reactIcon},
    { name: 'Javascript', icon: javascriptIcon },
    { name: 'Typescript', icon: typescriptIcon },
    { name: 'Next.JS', icon: nextIcon},
    { name: 'Node.JS', icon:  nodeIcon},   
    { name: 'Nest.JS', icon: nestIcon},
    { name: 'MongoDB', icon: mongodbIcon },   
    { name: 'AWS', icon: awsIcon},
    { name: 'Jest.JS', icon: jestIcon},
    { name: 'Vitest', icon: vitestIcon},
    
  ];

  return (
    <div className={styles.techStack}>
      {technologies.map((tech, index) => (
        <div key={index} className={styles.techItem}>
          <img src={tech.icon} alt={tech.name} />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;