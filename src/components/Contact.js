import React from "react";
import "../css/Contact.css";
import EmailIcon from "../assets/email.png";
import LinkedInIcon from "../assets/linkedin.png";
import YoutubeIcon from "../assets/youtube.png";

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={EmailIcon}
            alt="Email"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:teyjingsheng@gmail.com">teyjingsheng@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={LinkedInIcon}
            alt="LinkedIn"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/jingshenggg/">LinkedIn</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={YoutubeIcon}
            alt="Youtube"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.youtube.com/@hellothisisjs">Mr. JS</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
