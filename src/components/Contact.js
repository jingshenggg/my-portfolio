import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="/assets/email.png"
            alt="Email"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:teyjingsheng@gmail.com">teyjingsheng@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/jingshenggg/">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
