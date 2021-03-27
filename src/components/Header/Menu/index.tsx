/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import ButtonComp from '../../Button/index';

import {Nav} from './styles';

import arrowDownImg from '../../../assets/icon-arrow-dark.svg';

const NavBar: React.FC = (props) => {
  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  return(
    <Nav className="navbar">
      <ul className="navbar-nav">
        {/* Item 1 */}
        <a href="#" className="icon-button" onClick={() => setProductOpen(!productOpen)}>
          Product
          <img src={arrowDownImg} alt="mostrar"/>
        </a>

          {productOpen && (
            <div className="subitens">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
            </div>
          )}

        {/* Item 2 */}
        <a href="#" className="icon-button" onClick={() => setCompanyOpen(!companyOpen)}>
          Company
          <img src={arrowDownImg} alt="mostrar"/>
        </a>

          {companyOpen && (
            <div className="subitens">
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </div>
          )}

        {/* Item 3 */}
        <a href="#" className="icon-button" onClick={() => setConnectOpen(!connectOpen)}>
          Connect
          <img src={arrowDownImg} alt="mostrar"/>
        </a>

          {connectOpen && (
            <div className="subitens">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">LinkedIn</a></li>
            </div>
          )}

      <div className="login">
        <ButtonComp>Sign In</ButtonComp>
        <ButtonComp data-opt="true">Sing Up</ButtonComp>
      </div>
      </ul>


    </Nav>
  )
}

export default NavBar;
