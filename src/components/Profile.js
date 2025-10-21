import "../css/Profile.css";
import ProfilePic from "../assets/profile-pic.jpg";
import LinkedInIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";
import YoutubeIcon from "../assets/youtube.png";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={ProfilePic} alt="Jing Sheng profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I am</p>
        <h1 className="title">Jing Sheng</h1>
        <p className="section__text__p2">Welcome to my profile 😄</p>
        <div className="btn-container">
          <button
            className="btn btn-color-1"
            onClick={() => window.location.href="#experience"}
          >
            Work Experience
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => window.location.href="#sidehustles"}
          >
            Side Hustles
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
          <img
            src={YoutubeIcon}
            alt="Youtube"
            className="icon"
            onClick={() =>
              window.open("https://www.youtube.com/@hellothisisjs", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
