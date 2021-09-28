import React, { useEffect } from 'react';
import "./aboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {

    useEffect(() => {
        Aos.init({duration: 1000, delay:100});
    }, []);

    return (
        <section className="about-me" id="about-me">
            <div className="about-me-wrapper">
                <h3 className="section-title">ABOUT ME</h3>
                <hr className="section-title-underline" />
                <div className="about-me-main">
                    <div data-aos="fade-up" className="about-me-left">
                        <h4 className="work-title">Get to know me!</h4>
                        <p className="about-me-desc">My name is Daisuke. I am a <span>Front-End Web developer</span> based in Vancouver. I am passionate about creating interactive web applicaitons and engaging user experience using React.</p>
                        <p className="about-me-desc">I recently graduated from a Douglas College with diploma degree in <span>Computer Studies and Information Systems💻</span></p>
                        <p className="about-me-desc">Other than coding, I spend most of my time exploring the city of Vancouver, shooting photos and videos, and trying out new restaurants around the city! And I'm always down for Ramen🍜</p>
                    </div>
                    <div data-aos="fade-up" className="about-me-right">
                        <h4 className="work-title">My Skills</h4>
                        <ul className="my-skills">
                            <li className="my-skill">HTML</li>
                            <li className="my-skill">CSS</li>
                            <li className="my-skill">JAVASCRIPT</li>
                            <li className="my-skill">RESPONSIVE DESIGN</li>
                            <li className="my-skill">REACT</li>
                            <li className="my-skill">NODE</li>
                            <li className="my-skill">EXPRESS</li>
                            <li className="my-skill">MONGO DB</li>
                            <li className="my-skill">CONTEXT API</li>
                            <li className="my-skill">GIT</li>
                            <li className="my-skill">GITHUB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
