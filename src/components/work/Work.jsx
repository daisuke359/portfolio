import React, { useEffect } from 'react';
import "./work.css";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Work() {

    useEffect(() => {
        Aos.init({duration: 1000, delay:0});
    }, []);

    return (
        <section className="work" id="work">
            <div className="work-wrapper">
                <h3 className="section-title">PROJECTS</h3>
                <hr className="section-title-underline"></hr>
                <p className="section-desc">Here are the few projects I've worked on recently.</p>
                <div className="work-list">
                    <div className="work-item" data-aos="fade-up">
                        <div className="work-left">
                            <img src="/social.png" alt="" />
                        </div>
                        <div className="work-right">
                            <h4 className="work-title">Social App</h4>
                            <p className="work-desc">Social media application built with the MERN stack. It allows you to post text and photos, and follow/unfollow other users.</p>
                            <ul className="app-skills">
                                <li className="app-skill">REACT</li>
                                <li className="app-skill">CONTEXT API</li>
                                <li className="app-skill">NODE</li>
                                <li className="app-skill">EXPRESS</li>
                                <li className="app-skill">MONGO DB</li>
                            </ul>
                            <a href="https://github.com/daisuke359/social-app" target="_blank" rel="noreferrer" ><button className="app-btn">See the code</button></a>
                            <a href="https://social-app-mern.netlify.app/" target="_blank" rel="noreferrer" ><button className="app-btn">Visit the site</button></a>
                        </div>
                    </div>
                    <div className="work-item" data-aos="fade-up">
                        <div className="work-left">
                            <img src="/crypto.png" alt="" />
                        </div>
                        <div className="work-right">
                            <h4 className="work-title">Coin Dev</h4>
                            <p className="work-desc">This application is using public cryptocurrency API to display current price of cryptocurrencies as well as historic price change using Chart.js.</p>
                            <ul className="app-skills">
                                <li className="app-skill">REACT</li>
                                <li className="app-skill">CONTEXT API</li>
                                <li className="app-skill">FLEXBOX</li>
                                <li className="app-skill">STYLED COMPONENTS</li>
                                <li className="app-skill">COINGECKO API</li>
                                <li className="app-skill">CHART.JS</li>
                            </ul>
                            <a href="https://github.com/daisuke359/coin-dev" target="_blank" rel="noreferrer" ><button className="app-btn">See the code</button></a>
                            <a href="https://cryptocurrencytrackingapp.netlify.app/" target="_blank" rel="noreferrer" ><button className="app-btn">Visit the site</button></a>
                        </div>
                    </div>
                    <div className="work-item" data-aos="fade-up">
                        <div className="work-left">
                            <img src="/cafe.png" alt="" />
                        </div>
                        <div className="work-right">
                            <h4 className="work-title">Cafe Website</h4>
                            <p className="work-desc">This is a website for a cafe that I made up. It is fully responsive using media query and flexbox.</p>
                            <ul className="app-skills">
                                <li className="app-skill">HTML 5</li>
                                <li className="app-skill">CSS 3</li>
                                <li className="app-skill">JAVASCRIPT</li>
                                <li className="app-skill">FLEXBOX</li>
                                <li className="app-skill">MEDIA QUERY</li>
                                <li className="app-skill">RESPONSIVE DESIGN</li>
                            </ul>
                            <a href="https://github.com/daisuke359/cafe-landing" target="_blank" rel="noreferrer" ><button className="app-btn">See the code</button></a>
                            <a href="https://cafe-landing.netlify.app" target="_blank" rel="noreferrer" ><button className="app-btn">Visit the site</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
