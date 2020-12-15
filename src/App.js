import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';

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
    <Router>
      <AppContainer>
        <ContentContainer>
          <Switch>
            <Route exact path="/resume" render={() => window.location.href="/JeffreyCao_Resume.pdf"}/>
            <Route path="/about" component={<About/>}/>
            <Route path="/projects" component={<Projects/>}/>
            <Route path="/">
              <Projects />
            </Route>
          </Switch>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
};

export default App;
