import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import About from './About.js';
import Projects from './Projects.js';

const HeaderContainer = styled.div`
  height: 102px;
  padding-top: 32px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    padding: 24px 32px 0 32px;
    margin-bottom: 24px;
  }

  @media (max-width: 1070px) {
    max-width: 700px;
  }

  @media (max-width: 735px) {
    max-width: 636px;
    width: 100%;
  }

  .name {
    color: white;
    font-family: cursive;
    font-size: 30px;
    margin-bottom: 5px;

    @media (max-width: 735px) {
      font-size: 20px;
    }
  }

  nav {
    ul {
      display: flex;
      
      li {
        margin-left: 15px;
        list-style: none;
        font-size: 20px;

        @media (max-width: 735px) {
          font-size: 16px;
        }

        a {
          text-decoration: none;
          color: white;

          &:hover {
            color: #999;
          }
        }
      }
    }
  }
`;

const Header = () => {
  return(
    <Router>
      <HeaderContainer>
        <div className='name'>Jeffrey Cao</div>
        <nav>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;