import React, { useEffect} from 'react';
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "emailjs-com";

export default function Contact() {

    useEffect(() => {
        Aos.init({duration: 1000, delay:100});
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jzpla0q', 'template_qizv0hr', e.target, 'user_H4w6wAqAL5BCX1BQSAOB9')
        .then((result) => {
          console.log(result.text);
          toast("Your message has been sent 💌");
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
        
    }


    return (
        <section className="contact" id="contact">
            <div className="contact-wrapper">
                <h3 className="section-title">CONTACT</h3>
                <hr className="section-title-underline" />
                <div className="contact-main">
                    <div data-aos="fade-right" className="contact-main-right">
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
                    <div data-aos="fade-left" className="contact-main-left">
                        <form onSubmit={sendEmail} action="" className="contact-form">
                            <div className="contact-input">
                                <input type="text" placeholder="name*" name="from_name" required/>
                            </div>
                            <div className="contact-input">
                                <input type="email" name="email" placeholder="email*" required/>
                            </div>
                            <div className="contact-input">
                                <textarea className="message-input" placeholder="message*" name="message" required></textarea>
                            </div>
                            <button type="submit" className="contact-btn">Send Message</button>
                            <ToastContainer
                                position="top-left"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover/>
                        </form>
                    </div>
                </div>
                
                
            </div>
            
        </section>
    )
}
