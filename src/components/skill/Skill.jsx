import React from 'react';
import "./skill.css";

export default function Skill() {
    return (
        <div id="skill">
            <div className="skill-wrapper">
                <h3 className="section-title">My Skill Set</h3>
                <hr className="section-title-underline" />
                <div className="skill-main">
                    <div className="skill-main-left">
                        <i className="fas fa-laptop-code skill-icon"></i>
                        <h4 className="skill-title">Web Development</h4>
                        <p className="skill-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue ipsum, sagittis et mollis eget, scelerisque fringill</p>
                    </div>
                    <div className="skill-main-right">
                        <i className="fas fa-mobile-alt skill-icon"></i>
                        <h4 className="skill-title">Responsive Design</h4>
                        <p className="skill-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue ipsum, sagittis et mollis eget, scelerisque fringill</p>
                    </div>
                </div>
                <div className="skill-logos">
                    <div className="skill-logo-container">
                        <img src="/html5-icon.png" alt="" className="skill-logo-img" /> 
                    </div>
                    <div className="skill-logo-container">
                        <img src="/css3-icon.png" alt="" className="skill-logo-img" /> 
                    </div>
                    <div className="skill-logo-container">
                        <img src="/js-icon.png" alt="" className="skill-logo-img" />
                    </div>
                    <div className="skill-logo-container">
                        <img src="/react-icon.png" alt="" className="skill-logo-img" />
                    </div>
                    <div className="skill-logo-container">
                        <img src="/nodejs-icon.png" alt="" className="skill-logo-img" />
                    </div>
                    <div className="skill-logo-container">
                        <img className="skill-logo-img" src="/mongodb-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
