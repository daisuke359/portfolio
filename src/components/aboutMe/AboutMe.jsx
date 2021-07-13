import React from 'react';
import "./aboutMe.css";

export default function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me-wrapper">
                <h3 className="section-title">About Me</h3>
                <hr className="section-title-underline" />
                <div className="about-me-main">
                    <div className="about-me-left">
                        <img src="/avatar.png" alt="" className="about-img" />
                    </div>
                    <div className="about-me-right">
                        <p className="about-me-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue ipsum, sagittis et mollis eget, scelerisque fringilla ipsum. Etiam nec libero nisi. Duis condimentum felis sit amet sollicitudin hendrerit. Donec dapibus ex vitae ex efficitur, finibus ultricies dui cursus. Sed laoreet, enim eleifend dictum commodo, magna eros suscipit enim, eu scelerisque lacus lacus a nibh. Vivamus at ligula in ligula </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
