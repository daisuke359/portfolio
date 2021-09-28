import React from 'react';
import "./header.css";
import Navbar from '../Nav/Navbar';
import Typical from "react-typical";
import { Link } from 'react-scroll';

export default function Header() {
    return (
        <header id="header">
          <Navbar/>
        <div className="header-main">
          <h2 className="header-title">Hi, I'm Daisuke.</h2>
          <h4 className="header-desc">
            <Typical 
              loop={Infinity}
              wrapper="b"
              steps={[
                'Hello 👋',
                1000,
                'I am a front end engineer 👨‍💻',
                1000
              ]}
            /></h4>
            <Link 
              className="header-btn"
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >See my work</Link>
            <Link 
              className="header-btn"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >Get in touch</Link>
        </div>
      </header> 
    )
}
