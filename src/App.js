import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
`;

const ContentContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  @media (max-width: 1070px) {
    max-width: 700px;
  }

  @media (max-width: 735px) {
    max-width: 636px;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <ContentContainer>
        <Header />
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
