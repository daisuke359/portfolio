import React, { useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.div`
    z-index: 5;
    background-color: ${({ navbar }) => navbar ? 'black' : 'transparent'};
    opacity: 0.9;
    display: flex;
    align-items: center;
    padding: 10px 80px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 1500px;
    box-sizing: border-box;
    margin: 0 auto;

.logo-container {
    flex: 8;
  }
  .logo-container .fa-github {
    font-size: 50px;
    cursor: pointer;
    color: white;
  }
  
  .logo-container .fa-github:hover {
    color: #ffcc00;
  }

  @media only screen and (max-width: 1023px) {
    padding: 10px 60px;
  }


  @media only screen and (max-width: 767px) {
    padding: 10px 40px;

    .logo-container .fa-github, .nav-icon {
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 10px 25px;

  }
`;

export default function Navbar() {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 96) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <Nav navbar={navbar}>
          <div className="logo-container">
            <a href="https://github.com/daisuke359" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          </div>
          <Burger/>
        </Nav>
    )
}
