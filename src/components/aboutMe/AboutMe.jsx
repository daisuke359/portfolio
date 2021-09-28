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
                <h3 className="section-title">About Me</h3>
                <hr className="section-title-underline" />
                <div className="about-me-main">
                    <div data-aos="fade-right" className="about-me-left">
                        <img src="/avatar.png" alt="" className="about-img" />
                    </div>
                    <div data-aos="fade-left" className="about-me-right">
                        <p className="about-me-desc">My name is Daisuke. I am a Front-End Web developer based in Vancouver! I am passionate about creating interactive web applicaitons and engaging user experience using React.</p>
                        <p className="about-me-desc">I am currently working towards a diploma degree in Computer Studies an Information Systems at Douglas College.💻</p>
                        <p className="about-me-desc">Other than coding, I spend most of my time exploring the city of Vancouver, shooting photos and videos, and trying out new restaurants around the city! And I'm always down for Ramen🍜</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
