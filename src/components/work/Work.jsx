import React, { useEffect } from 'react';
import "./work.css";
import styled from 'styled-components';
import Aos from "aos";
import "aos/dist/aos.css";

const WorkItem = styled.div`
    transition: all 0.3s;
    margin: 30px auto 20px;
    width: 100%;
    height: auto;
    max-width: 100%;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;


    &:last-child {
        margin-bottom: 40px;
    }

    &:hover {
        transform: scale(1.05);
    }

    &:hover .overlay {
        bottom: 0;
        height: 100%;
    }

`;

const AppImg = styled.img`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: fill;
    overflow: hidden;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    -webkit-box-shadow: 9px 7px 21px 1px rgba(0,0,0,0.45); 
    box-shadow: 9px 7px 21px 1px rgba(0,0,0,0.45);

    &:hover {
        -webkit-filter: brightness(15%);
        transition: all 0.3s;
    }

`;

export default function Work() {

    useEffect(() => {
        Aos.init({duration: 1000, delay:0});
    }, []);

    return (
        <section className="work" id="work">
            <div className="work-wrapper">
                <h3 className="section-title">My Recent Work</h3>
                <hr className="section-title-underline"></hr>
                <p className="section-desc">Here are the few projects I've worked on recently.</p>

                <div className="work-list">
                    <WorkItem data-aos="fade-up">
                        <AppImg className="app-img" src="/social-app.png" alt="" />
                        
                        <div className="overlay">
                            <div className="overlay-wrapper">
                                <div className="overlay-main">
                                    <h3 className="overlay-title">Social App</h3>
                                    <p className="overlay-desc">Social media application built with the MERN stack. It allows you to post text and photos, and follow/unfollow other users. The backend for this app is hosted on Heroku and it may take a few seconds to load! Use yui@gmail.com, and password: 123456 to login.</p>
                                </div>
                            

                            <div className="overlay-skill">
                                <h4 className="overlay-skill-title">Technology Used</h4>
                                <ul className="app-skills">
                                    <li className="app-skill">REACT</li>
                                    <li className="app-skill">CONTEXT API</li>
                                    <li className="app-skill">NODE</li>
                                    <li className="app-skill">EXPRESS</li>
                                    <li className="app-skill">MONGODB</li>
                                    <li className="app-skill">MATERIAL-UI</li>
                                </ul>
                            </div>

                            <div className="overlay-btns">
                                <a href="https://github.com/daisuke359/social-app" target="_blank" rel="noreferrer" ><button className="app-btn">See the code</button></a>
                                <a href="https://social-app-mern.netlify.app/" target="_blank" rel="noreferrer" ><button className="app-btn">Visit the site</button></a>
                            </div>

                            </div>
                            
                        </div>
                        
                        
                    </WorkItem>

                    <WorkItem data-aos="fade-up">
                        <AppImg className="app-img" src="/coin-dev.png" alt="" />
                        <div className="overlay">
                            <div className="overlay-wrapper">
                                <div className="overlay-main">
                                    <h3 className="overlay-title">Coin Dev</h3>
                                    <p className="overlay-desc">This application is using public cryptocurrency API to display current price of cryptocurrencies as well as historic data. This app is created using ReactJS and technologies such as Context API, Styled-Components, and Pagination.</p>
                                
                                </div>

                            <div className="overlay-skill">
                                <h4 className="overlay-skill-title">Technology Used</h4>
                                <ul className="app-skills">
                                    <li className="app-skill">REACT</li>
                                    <li className="app-skill">CONTEXT API</li>
                                    <li className="app-skill">FLEXBOX</li>
                                    <li className="app-skill">STYLED COMPONENTS</li>
                                    <li className="app-skill">COINGECKO API</li>
                                </ul>
                            </div>
                            <div className="overlay-btns">
                                <a href="https://github.com/daisuke359/coin-dev" target="_blank" rel="noreferrer" ><button className="app-btn">See the code</button></a>
                                <a href="https://cryptocurrencytrackingapp.netlify.app/" target="_blank" rel="noreferrer" ><button className="app-btn">Visit the site</button></a>
                            </div>

                            </div>
                        </div>
                        
                        
                    </WorkItem>

                    <WorkItem data-aos="fade-up">
                        <AppImg className="app-img" src="/linkein_clone.png" alt="" />
                        <div className="overlay">
                            <div className="overlay-wrapper">
                                <div className="overlay-main">
                                    <h3 className="overlay-title">LinkedIn Clone</h3>
                                    <p className="overlay-desc">This application is similar to the social app but it is using Redux for state management. it also uses firebase for the database and authentication.</p>
                                
                                </div>

                            <div className="overlay-skill">
                                <h4 className="overlay-skill-title">Technology Used</h4>
                                <ul className="app-skills">
                                    <li className="app-skill">REACT</li>
                                    <li className="app-skill">FIREBASE</li>
                                    <li className="app-skill">FLEXBOX</li>
                                    <li className="app-skill">REDUX</li>
                                    <li className="app-skill">MATERIAL-UI</li>
                                </ul>
                            </div>
                            <div className="overlay-btns">
                                <a href="https://github.com/daisuke359/linkedin-clone" target="_blank" rel="noreferrer" ><button className="app-btn">See the code</button></a>
                                <a href="https://linkedin-clone-e82bf.web.app/" target="_blank" rel="noreferrer" ><button className="app-btn">Visit the site</button></a>
                            </div>

                            </div>
                        </div>
                        
                        
                    </WorkItem>
                </div>
                <a href="https://github.com/daisuke359" target="_blank" rel="noreferrer" ><button className="work-btn">See more on GitHub</button></a>
            </div>
        </section>
    )
}
