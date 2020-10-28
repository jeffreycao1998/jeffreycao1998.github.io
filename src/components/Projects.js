import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  font-family: 'poppins', 'sans-serif';
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-bottom: 100px;

  @media (max-width: 1280px) {
    padding: 0 32px 100px 32px;
  }

  @media (max-width: 1070px) {
    max-width: 700px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 735px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 636px;
    width: 100%;
    gap: 45px;
  }
`;

const Projects = () => {
  return(
    <Container>
      <Project 
        link={'https://moodify.ca/'}
        imageUrl={'https://i.imgur.com/SNnglX8.png'} 
        name={'Moodify'} 
        stack={'React, Styled Components, Material UI, ChartJS, Express, PostgreSQL'} 
      />
      <Project 
        link={'https://couch-potatoez.herokuapp.com/'}
        imageUrl={'https://i.gyazo.com/aad446ecef8d2e40c1953a123bfc914f.jpg'} 
        name={'Couch Potato'} 
        stack={'jQuery, SASS, Express, PostgreSQL, Socket.io, Stripe, Twilio, Google Maps'} 
      />
      <Project 
        link={'https://battleship-multiplayer-jeff.herokuapp.com/'}
        imageUrl={'https://i.imgur.com/sh6DpqN.png'} 
        name={'Battleship'} 
        stack={'jQuery, SASS, PostgreSQL, Socket.io'} 
      />
      <Project 
        link={'https://jeffreycao1998.github.io/Coronavirus-Tracker/'}
        imageUrl={'https://i.gyazo.com/f91c714a022362da0711f26f7d92242c.png'} 
        name={'Coronavirus Tracker'} 
        stack={'HTML, CSS, JavaScript, ChartJS'} 
      />
      <Project 
        link={'https://interview-scheduler-jc.netlify.app/'}
        imageUrl={'https://i.gyazo.com/3c33411cc19e916fce17c008cc524eca.png'} 
        name={'Interview Scheduler'} 
        stack={'React, CSS, PostgreSQL, Socket.io'} 
      />
      <Project 
        link={'https://github.com/jeffreycao1998/frontend-experiments/tree/main/gsap/gsap1'}
        imageUrl={'https://media3.giphy.com/media/543O7EebJnnPxDiiPt/giphy.gif'} 
        name={'GSAP Animation'} 
        stack={'GSAP3, Scroll-Magic'} 
      />
    </Container>
  );
};

export default Projects;