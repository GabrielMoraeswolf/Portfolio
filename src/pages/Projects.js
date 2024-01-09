import React from 'react';
import styles from '../assets/styles/Projects.module.css';
import Project from '../components/Project';

const Projects = () => {
  const projectsData = [
    {
      title: 'Ecommerce CompassUOL',
      description: 'O objetivo deste projeto é desenvolver uma aplicação de e-commerce em React Native, onde o usuário deverá preencher todos os campos de login antes de prosseguir para a próxima tela. Caso o usuário não preencha os campos corretamente, serão exibidas mensagens de erro. Assim que o usuário se cadastrar com sucesso, ele será direcionado para a página inicial, onde serão exibidos alguns produtos. Em seguida, o usuário pode selecionar qualquer produto, escolher sua quantidade e adicioná-lo ao carrinho de compras. Por fim, dentro do carrinho de compras, o usuário pode retirar ou adquirir o produto. Outro objetivo deste projeto é criar uma aplicação intuitiva e amigável que garanta que o usuário forneça todas as informações necessárias na página de login e que a aplicação atenda aos principais requisitos listados pela equipe de UI/UX.',
      images: [
        require('../assets/project/ecomerce/1.png'),
        require('../assets/project/ecomerce/2.png'),
        require('../assets/project/ecomerce/3.png'),
        require('../assets/project/ecomerce/4.png'),
        // adicione mais imagens conforme necessário
      ],
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      images: [
        require('../assets/project/ecomerce/1.png'),
        require('../assets/project/ecomerce/2.png'),
        require('../assets/project/ecomerce/3.png'),
        require('../assets/project/ecomerce/4.png'),
        // adicione mais imagens conforme necessário
      ],
    },
    // adicione mais projetos conforme necessário
  ];

  return (
    <div className={styles.project}>
      <h1>Meus Projetos</h1>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};
export default Projects;