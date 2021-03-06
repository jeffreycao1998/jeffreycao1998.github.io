import React, { useEffect } from 'react';
import styled from 'styled-components';
import ScrambleText from 'scramble-text';
import { Link } from 'react-router-dom';

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
  
  useEffect(() => {
    const name = document.querySelector('.name');
    const scrambleText = new ScrambleText(name, {
      timeOffset: 100,
      chars: [
        '安','以','宇','衣','於',
        '加','幾','久','計','己',
        '左','之','寸','世','曽',
        '太','知','川','天','止',
        '奈','仁','奴','称','乃',
        '波','比','不','部','保',
        '末','美','武','女','毛',
        '也','為','由','恵','与',
        '良','利','留','礼','呂',
        '和','遠','无'
      ],
    }).play();
    scrambleText.start();
  },[]);

  return(
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
  );
};

export default Header;