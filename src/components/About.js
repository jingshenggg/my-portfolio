import { useState, useEffect } from "react";
import "../css/About.css";
import ExperienceIcon from "../assets/experience.png";
import EducationIcon from "../assets/education.png";

const aboutData = {
  experience: {
    title: "Experience",
    icon: ExperienceIcon,
    description: ["More than 2 years", "Software Development & Data Engineering"]
  },
  education: {
    title: "Education",
    icon: EducationIcon,
    description: [
      "Nanyang Technological University 2019 - 2023",
      "Bachelor of Engineering (Electrical & Electronic Engineering)",
      "with Honours (Distinction)",
      "Specialization: Computer Engineering"
    ]
  }
};

function About() {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  return (
    <section 
      id="about" 
      className={`section-fade ${isVisible ? 'visible' : ''}`}
      aria-labelledby="about-title"
    >
      <p className="section__text__p1" aria-hidden="true">Get To Know More</p>
      <h1 id="about-title" className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            {Object.entries(aboutData).map(([key, data]) => (
              <div 
                key={key} 
                className="details-container"
                data-aos="fade-up"
                data-aos-delay={key === 'experience' ? "0" : "200"}
              >
                <img
                  src={data.icon}
                  alt={`${data.title} icon`}
                  className="icon"
                  loading="lazy"
                />
                <h3>{data.title}</h3>
                <p>
                  {data.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < data.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="text-container" data-aos="fade-up" data-aos-delay="400">
            <p>
              Welcome to my profile! I graduated from Nanyang Technological University (NTU) with a degree in Electrical & Electronic Engineering, specializing in Computer Engineering. 
              This gave me a strong foundation in both software development and system-level problem solving.
            </p>
            <p>
              I began my career as a Full Stack Developer, gaining hands-on experience in building end-to-end applications. 
              Over time, I discovered a deeper passion for data, which led me to specialize as a Data Engineer.
            </p>
            <p>
              Today, I focus on:
              <ul>
                <li>Designing and building robust ETL pipelines and scalable data systems</li>
                <li>Managing complex data workflows using Python, SQL, and modern data tools</li>
                <li>Integrating real-time streaming technologies for timely insights</li>
                <li>Optimizing database performance and accessibility</li>
              </ul>
            </p>
            <div className="skills-container">
              <h3>Tech Stack</h3>
              <div className="skills-grid">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Apache Spark</span>
                <span className="skill-tag">Databricks</span>
                <span className="skill-tag">Hadoop</span>
                <span className="skill-tag">Hive</span>
                <span className="skill-tag">ETL</span>
                <span className="skill-tag">Data Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
