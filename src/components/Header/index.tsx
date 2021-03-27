/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';

import NavBar from './Menu';
import ButtonComp from '../Button/index';

import logoImg from '../../assets/logo.svg';
import menuOpenImg from '../../assets/icon-hamburger.svg';
import menuCloseImg from '../../assets/icon-close.svg';

import {Container, Menu, Information} from './styles';

const Header: React.FC = () => {
  const  [openMenu, setOpenMenu] = useState(false)

  return (
    <Container>
      <Menu>
        <img src={logoImg} alt="Blogr"/>

        <a href="#" className="menu__toogle" onClick={() => setOpenMenu(!openMenu)}>
          <img
            src={!openMenu ? menuOpenImg : menuCloseImg}
            alt="menu"
          />
        </a>

        {openMenu && <NavBar />}
      </Menu>

      <Information>
        <h1>A modern<br />publishing platform</h1>
        <p>Grow your audience and build your online brand</p>

        <div className="options">
          <ButtonComp data-select="true">Start for Free</ButtonComp>
          <ButtonComp>Learn More</ButtonComp>
        </div>
      </Information>
    </Container>
  )
}

export default Header;
