import React from 'react';
import "./work.css";

export default function Work() {
    return (
        <div id="work">
            <div className="work-wrapper">
                <h3 className="section-title">My Recent Work</h3>
                <hr className="section-title-underline"></hr>
                <p className="section-desc">Here are the few projects I've worked on recently.</p>
                <div className="work-list">
                    <div className="work-item">
                    <a href="https://social-app-mern.netlify.app" target="_blank" rel="noreferrer" ><img className="app-img" src="/social-app.png" alt="" /></a>
                    </div>
                    <div className="work-item">
                    <a href="https://twitter-api-search.netlify.app" target="_blank" rel="noreferrer" ><img className="app-img" src="./twitter-app.png" alt="" /></a>
                    </div>
                </div>
                <a href="https://github.com/daisuke359" target="_blank" rel="noreferrer" ><button className="work-btn">See more on GitHub</button></a>
            </div>
        </div>
    )
}
