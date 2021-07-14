import React, {useEffect} from 'react';
import "./skill.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skill() {

    useEffect(() => {
        Aos.init({duration: 1000, delay:100});
    }, []);

    return (
        <section className="skill" id="skill">
            <div className="skill-wrapper">
                <h3 className="section-title">My Skill Set</h3>
                <hr className="section-title-underline" />
                <div className="skill-main">
                    <div data-aos="fade-right" className="skill-main-left">
                        <i className="fas fa-laptop-code skill-icon"></i>
                        <h4 className="skill-title">Web Development</h4>
                        <p className="skill-desc">I build web applications that are fast, look modern, and function amaizingly.</p>
                    </div>
                    <div data-aos="fade-left" className="skill-main-right">
                        <i className="fas fa-mobile-alt skill-icon"></i>
                        <h4 className="skill-title">Responsive Design</h4>
                        <p className="skill-desc">My websites will on any devices: phone, tablet, laptop, or even bigger screen.</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="skill-logos">
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
        </section>
    )
}
