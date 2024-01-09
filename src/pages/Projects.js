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
        
      ],
      link: 'https://github.com/GabrielMoraeswolf/loginCompassUOL',
    },
    {
      title: 'Geociências em Libras',
      description: 'Neste projeto foi criada uma página Web em React, com vários botões que contem palavras muito comuns na Geologia e Geografia. Ao clicar em um dos botoes a pessoa é redirecionada a uma respectiva pagina onde haverá um GIF mostrando o sinal em libras correspondente.',
      images: [
        require('../assets/project/librasGeo/1.png'),
        require('../assets/project/librasGeo/2.png'),
      ],
      link:'https://final-libras.vercel.app/',
    },
    {
      title: 'Lembretes',
      description: 'Nesse projeto é criado uma API simples para criar novos bilhetes e os exibir em formato de Lista. Também é possível os remover separadamente ao clicar no botão "x", há algumas validações feitas como estar no formato (dd/mm/yyyy), passar datas validas e posteriores há data atual.',
      images: [
        require('../assets/project/lembrete/1.png'),
        require('../assets/project/lembrete/2.png'),
      ],
      link:'https://lembretes-gamma.vercel.app/',
    },
  ];

  return (
    <div className={styles.project}>
      <h1 id="projetos">Meus Projetos</h1>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};
export default Projects;