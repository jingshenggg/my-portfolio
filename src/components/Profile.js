import React from "react";
import "./Profile.css";
import ProfilePic from "../assets/profile-pic.jpg";
import LinkedInIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={ProfilePic} alt="Jing Sheng profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Jing Sheng</h1>
        <p className="section__text__p2">Data Engineer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("/assets/resume.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => window.location.href="#contact"}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={LinkedInIcon}
            alt="LinkedIn"
            className="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/jingshenggg/", "_blank")
            }
          />
          <img
            src={GitHubIcon}
            alt="GitHub"
            className="icon"
            onClick={() =>
              window.open("https://github.com/jingshenggg", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
