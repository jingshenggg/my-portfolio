import { useEffect, useState } from "react";
import "../css/Profile.css";
import ProfilePic from "../assets/profile-pic.jpg";
import LinkedInIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";
import YoutubeIcon from "../assets/youtube.png";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/jingshenggg/",
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    url: "https://github.com/jingshenggg",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    url: "https://www.youtube.com/@hellothisisjs",
  },
];

function Profile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section id="profile" className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="section__pic-container" aria-hidden="true">
        <img 
          src={ProfilePic} 
          alt="Jing Sheng profile" 
          className="profile-image"
          loading="eager"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I am</p>
        <h1 className="title">Jing Sheng</h1>
        <p className="section__text__p2">Data Engineer & Content Creator</p>
        <div className="btn-container" role="group" aria-label="Navigation buttons">
          <a 
            href="#experience"
            className="btn btn-color-1"
          >
            Work Experience
          </a>
          <a 
            href="#sidehustles"
            className="btn btn-color-1"
          >
            Side Hustles
          </a>
          <a 
            href="#contact"
            className="btn btn-color-1"
          >
            Contact Info
          </a>
        </div>
        <div 
          className="socials-container"
          role="group" 
          aria-label="Social media links"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
              className="social-link"
            >
              <img
                src={social.icon}
                alt={`${social.name} icon`}
                className="icon"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;
