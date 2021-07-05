import React from 'react';
import "./header.css";
import Navbar from '../Nav/Navbar';
import Typical from "react-typical";

export default function Header() {
    return (
        <header>
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
            <a href="#work"><button className="header-btn">See my work</button></a>
            <a href="#contact"><button className="header-btn">Get in touch</button></a>
        </div>
      </header> 
    )
}
