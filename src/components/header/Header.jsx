import React from 'react';
import "./header.css";

export default function Header() {
    return (
        <header>
        <div className="header-nav">
          <div className="logo-container">
            <i className="fab fa-github"></i>
          </div>
          
          <ul className="nav-list">
            <li className="nav-item"><a href="#work">Work</a></li>
            <li className="nav-item"><a href="#about-me">About Me</a></li>
            <li className="nav-item"><a href="#skill">Skill</a></li>
            <li className="nav-item"><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="header-main">
          <h2 className="header-title">Hi, I'm Daisuke.</h2>
          <h4 className="header-desc">I'm a front end engineer.</h4>
            <button className="header-btn">See my work</button>
            <button className="header-btn">Get in touch</button>
        </div>
      </header> 
    )
}
