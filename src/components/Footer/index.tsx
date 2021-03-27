/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logoImg from '../../assets/logo.svg';

import {FooterContainer, Mentor} from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <img src={logoImg} alt="Blogr"/>

      <ul>
        <li className="indice"><a href="_">Product</a></li>
        <li><a href="_">Overview</a></li>
        <li><a href="_">Pricing</a></li>
        <li><a href="_">Marketplace</a></li>
        <li><a href="_">Features</a></li>
        <li><a href="_">Integrations</a></li>


        <li className="indice"><a href="_">Company</a></li>
        <li><a href="_">About</a></li>
        <li><a href="_">Team</a></li>
        <li><a href="_">Blog</a></li>
        <li><a href="_">Careers</a></li>

        <li className="indice"><a href="_">Connect</a></li>
        <li><a href="_">Contact</a></li>
        <li><a href="_">Newsletter</a></li>
        <li><a href="_">LinkedIn</a></li>
      </ul>

      <Mentor className="attribution">
        <p>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="#">Gustavo Sorati</a>.
        </p>
      </Mentor>
    </FooterContainer>
  )
}

export default Footer;
