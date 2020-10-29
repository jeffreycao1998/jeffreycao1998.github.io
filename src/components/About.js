import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  font-family: 'poppins';
  text-align: left;
  max-width: 1080px;

  @media (max-width: 1280px) {
    padding: 0 32px;
  }

  @media (max-width: 1070px) {
    max-width: 636px;
    padding: 0 0 0 32px;
  }

  .about-me {
    display: flex;
    width: 100%;

    @media (max-width: 1070px) {
      flex-direction: column;
    }

    .text {
      min-width: 476px;
      max-width: 476px;
      padding-right: 64px;

      @media (max-width: 1070px) {
        min-width: 100%;
        max-width: 100%;
      }

      .title {
        margin-bottom: 30px;
        letter-spacing: 2px;
      }

      p {
        margin-bottom: 32px;
        letter-spacing: 1.5px;
        line-height: 24px;
      }

      .contact {
        margin-bottom: 64px;

        a {
          text-decoration: none;
          color: white;
          margin-right: 16px;
          padding: 7px 15px;
          border: 1px solid white;
          border-radius: 4px;
          transition: all 0.2s ease-out;
          line-height: 30px;
          letter-spacing: 1px;

          &:hover {
            color: #212121;
            background-color: white;
          }
        }
      }
    }

    .image {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        border-radius: 50%;

        @media (max-width: 1070px) {
          margin: 0 40px 40px 0;
        }
      }
    }
  }
`;

const About = () => {
  return(
    <Container>
      <div className='about-me'>
        <div className='text'>
          <h1 className='title'>Hi there!</h1>
          <p>I’m Jeff, an avionics technician turned full stack developer. I used to think that working in a constantly changing industry would just bring unnecessary stress to my life but now I realise it’s what I actually crave. I want to watch tech evolve from the front row.</p>
          <p>I find software architecture pretty intriguing and it’s what drives me to continuously expand my knowledge in both the front and back end. It’ll be a long journey but I like to believe that persistence always pays off.</p>
          <div className='contact'>
            <a href='https://www.dropbox.com/s/61svvz65mop6nl2/Jeffrey%20Cao.pdf?dl=0' target='_blank'>Resume</a>
            <a href='https://github.com/jeffreycao1998' target='_blank'>Github</a>
            <a href='https://www.linkedin.com/in/jeffrey-cao-05187b133/' target='_blank'>LinkedIn</a>
          </div>
        </div>
        <div className='image'>
          <img src='https://i.imgur.com/PcFsVsA.jpg' />
        </div>
      </div>
    </Container>
  );
};

export default About;