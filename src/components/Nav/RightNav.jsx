import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
list-style-type: none;
display: flex;
flex: 4;
justify-content: space-between;

.nav-item {
    padding-bottom: 5px;
}
  
  .nav-item:hover {
    border-bottom: 2px solid #ffcc00;
  }
  
  .nav-item a {
    text-decoration: none;
    color: white;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
  }
  
  a:hover {
    color: #ffcc00;
  }

  @media only screen and (max-width: 1023px) {
      z-index: 10;
    margin-top: 0;
    flex-flow: column;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;

    .nav-item {
        width: 30%;
        margin: 0 auto;
        font-size: 2em;
        text-align: center;
    }

  }
`;



export default function RightNav({open, handleClick}) {


    return (
        <Ul open={open}>
            <li onClick={handleClick} className="nav-item"><a href="#work">Work</a></li>
            <li onClick={handleClick} className="nav-item"><a href="#about-me">About Me</a></li>
            <li onClick={handleClick} className="nav-item"><a href="#skill">Skill</a></li>
            <li onClick={handleClick} className="nav-item"><a href="#contact">Contact</a></li>
          </Ul>
    )
}
