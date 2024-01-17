import React from 'react';
import styles from '../assets/styles/Projects.module.css';
import Project from '../components/Project';
import pokedexVideo from '../assets/video/pokedex.mp4';
import superCarsVideo from '../assets/video/supercars.mp4';
import librasVideo from '../assets/video/libras.mp4';
import lembreteVideo from '../assets/video/lembretes.mp4';

const Projects = () => {
  const projectsData = [
    {
      title: 'Ecommerce CompassUOL',
      description: 'O objetivo deste projeto é desenvolver uma aplicação de e-commerce em React Native, onde o usuário deverá preencher todos os campos de login antes de prosseguir para a próxima tela. Caso o usuário não preencha os campos corretamente, serão exibidas mensagens de erro. Assim que o usuário se cadastrar com sucesso, ele será direcionado para a página inicial, onde serão exibidos alguns produtos. Em seguida, o usuário pode selecionar qualquer produto, escolher sua quantidade e adicioná-lo ao carrinho de compras. Por fim, dentro do carrinho de compras, o usuário pode retirar ou adquirir o produto. Outro objetivo deste projeto é criar uma aplicação intuitiva e amigável que garanta que o usuário forneça todas as informações necessárias na página de login e que a aplicação atenda aos principais requisitos listados pela equipe de UI/UX.',
      video: ' ' ,
      link: 'https://github.com/GabrielMoraeswolf/loginCompassUOL',
    },
    {
      title: 'Pokédex',
      description: 'Apresento com entusiasmo a minha Pokedex online, uma experiência interativa e envolvente para todos os amantes de Pokémon! Desenvolvi este site utilizando a tecnologia React, oferecendo uma jornada fascinante através das oito primeiras gerações de Pokémon, Navegar pelo meu site é como embarcar em uma jornada Pokémon, onde cada criatura icônica é representada em cards informativos. Cada card exibe orgulhosamente o número correspondente na Pokedex, proporcionando uma visão rápida e ordenada de todas as espécies. Ao clicar em um card, você será imerso em um mundo de informações detalhadas sobre o Pokémon escolhido. Seja você um treinador experiente ou um novato, minha Pokedex é um recurso valioso para todos os fãs de Pokémon. Viva a emoção da descoberta, aprendizado e aventura enquanto navega pelas páginas interativas da minha Pokedex React. Explore, conheça e mergulhe no fascinante mundo dos Pokémon de maneira única e envolvente!',
      video: pokedexVideo ,
      link: 'https://pokedex-five-livid.vercel.app/gen-i',
    },
    {
      title: 'Site Super Cars',
      description: 'Bem-vindo ao meu site automotivo, um destino digital para os apaixonados por carros e entusiastas automotivos! Aqui, a beleza dos automóveis se encontra com a riqueza de informações técnicas, proporcionando uma experiência imersiva para os amantes de velocidade, a jornada começa com um clique, mergulhando você em um mundo de detalhes automotivos ao clicar nas imagens. Ao selecionar uma foto, um modal informativo se abre, revelando não apenas a imagem impressionante do carro, mas também uma série de atributos que alimentam a paixão pelos motores.Seja você um entusiasta de carros esportivos, descubra, admire e apaixone-se pelos carros que transcendem o convencional. Este é mais que um site automotivo, é uma celebração da engenharia, design e paixão sobre rodas. Entre, clique e mergulhe no universo emocionante dos automóveis. ',
      video: superCarsVideo ,
      link: 'https://super-cars-app.vercel.app/',
    },
    {
      title: 'Geociências em Libras',
      description: 'Neste projeto foi criada uma página Web em React, com vários botões que contem palavras muito comuns na Geologia e Geografia. Ao clicar em um dos botoes a pessoa é redirecionada a uma respectiva pagina onde haverá um GIF mostrando o sinal em libras correspondente.',
      video: librasVideo ,
      link:'https://final-libras.vercel.app/',
    },
    {
      title: 'Lembretes',
      description: 'Nesse projeto é criado uma API simples para criar novos bilhetes e os exibir em formato de Lista. Também é possível os remover separadamente ao clicar no botão "x", há algumas validações feitas como estar no formato (dd/mm/yyyy), passar datas validas e posteriores há data atual.',
      video: lembreteVideo ,
      link:'https://lembretes-gamma.vercel.app/',
    },
  ];

  return (
    <div className={styles.project}>
      <h1 id="projetos" className={styles.underline}>Meus Projetos</h1>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};
export default Projects;