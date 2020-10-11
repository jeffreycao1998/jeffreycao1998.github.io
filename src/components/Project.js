import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 280px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;

  @media (max-width: 1280px) {
    height: 280px;
  }

  a {
    text-decoration: none;

    .image-container {
      width: 100%;
      height: 195px;
      overflow: hidden;
      border-bottom: 1px solid white;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .description {
      height: 88px;
      padding: 10px;
      display: flex;
      flex-direction: column;

      .project-name {
        margin-bottom: 10px;
      }

      .project-stack {
        color: grey;
      }
    }
  }
`;

const Project = ({ link, imageUrl, name, stack }) => {
  return(
    <Container>
      <a href={link} target='_blank'>
        <div className='image-container'>
          <img src={imageUrl} alt={name} />
        </div>
        <div className='description'>
          <h3 className='project-name'>{name}</h3>
          <p className='project-stack'>{stack}</p>
        </div>
      </a>
    </Container>
  );
};

export default Project;