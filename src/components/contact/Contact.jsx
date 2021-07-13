import React from 'react';
import "./contact.css";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-wrapper">
                <h3 className="section-title">Contact Me</h3>
                <hr className="section-title-underline" />
                <div className="contact-main">
                    <div className="contact-main-right">
                        <h4 className="contact-title">Let's Connect!</h4>
                        <p className="contact-desc">
                            Feel free to reach out if you're interested in working together, being friends, or watching MLB games together! All fields are required!
                        </p>
                        <div className="contact-icons">
                            <a href="https://www.linkedin.com/in/daisuke-kawabuchi-3a3a08208/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/daisuke359" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/buchi_daisuke/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="mailto:dkawabuchi@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                    <div className="contact-main-left">
                        <form action="" className="contact-form">
                            <div className="contact-input">
                                <input type="text" placeholder="name*" required/>
                            </div>
                            <div className="contact-input">
                                <input type="email" placeholder="email*" required/>
                            </div>
                            <div className="contact-input">
                                <textarea className="message-input" placeholder="message*" required></textarea>
                            </div>
                            <button className="contact-btn">Send Message</button>

                        </form>
                    </div>
                </div>
                
                
            </div>
            
        </section>
    )
}
