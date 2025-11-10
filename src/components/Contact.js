import React, { useState, useEffect } from "react";
import "../css/Contact.css";
import EmailIcon from "../assets/email.png";
import LinkedInIcon from "../assets/linkedin.png";
import YoutubeIcon from "../assets/youtube.png";

const contactMethods = [
  {
    icon: EmailIcon,
    alt: "Email",
    text: "teyjingsheng@gmail.com",
    link: "mailto:teyjingsheng@gmail.com",
    label: "Send me an email",
  },
  {
    icon: LinkedInIcon,
    alt: "LinkedIn",
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/jingshenggg/",
    label: "Connect with me on LinkedIn",
  },
  {
    icon: YoutubeIcon,
    alt: "Youtube",
    text: "Mr. JS",
    link: "https://www.youtube.com/@hellothisisjs",
    label: "Subscribe to my YouTube channel",
  }
];

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="contact" 
      className={`section-fade ${isVisible ? 'visible' : ''}`}
      aria-labelledby="contact-title"
    >
      <p className="section__text__p1" aria-hidden="true">Get in Touch</p>
      <h1 id="contact-title" className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        {contactMethods.map((method, index) => (
          <div 
            key={index} 
            className="contact-info-container"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="icon-wrapper">
              <img
                src={method.icon}
                alt={method.alt}
                className="icon contact-icon"
                loading="lazy"
              />
            </div>
            <p>
              <a 
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={method.label}
              >
                {method.text}
              </a>
            </p>
          </div>
        ))}
      </div>
      <div className="contact-message">
        <p>I'm always interested in hearing about new opportunities and collaborations!</p>
      </div>
    </section>
  );
}

export default Contact;
