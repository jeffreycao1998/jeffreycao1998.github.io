import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import Header from './/Header';

const Container = styled.div`
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
    <>
      <Header/>
      <Container>
        <Project 
          link={'https://github.com/jeffreycao1998/route-mapper'}
          imageUrl={'https://raw.githubusercontent.com/jeffreycao1998/route-mapper/master/documents/create-delete.gif'} 
          name={'Route Mapper'} 
          stack={'TS, React, Mapbox, Node, GraphQL'} 
        />
        <Project 
          link={'http://shopifyclone-client.s3-website-us-east-1.amazonaws.com/'}
          imageUrl={'https://raw.githubusercontent.com/jeffreycao1998/shopify-clone/master/client/documents/5.gif'} 
          name={'Shopify Clone'} 
          stack={'TS, React, Node, GraphQL, Postgres, Sequelize, AWS Lambda / RDS / S3'} 
        />
        <Project 
          link={'https://github.com/jeffreycao1998/sudoku-solver'}
          imageUrl={'https://media1.giphy.com/media/pny4FrpjB0LPQJ3zvT/giphy.gif'} 
          name={'Sudoku Solver'} 
          stack={'React, Styled Components'} 
        />
        <Project 
          link={'https://github.com/jeffreycao1998/frontend-experiments/tree/main/gsap/gsap1'}
          imageUrl={'https://media3.giphy.com/media/543O7EebJnnPxDiiPt/giphy.gif'} 
          name={'GSAP Animation'} 
          stack={'GSAP3, Scroll-Magic'} 
        />
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
      </Container>
    </>
  );
};

export default Projects;