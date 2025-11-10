import { useState, useEffect } from "react";
import "../css/Experience.css";
import PDF from "../assets/Databricks Certified Data Engineer Associate.pdf";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const workExperiences = [
    {
      role: "Data Engineer",
      company: "Hyundai Motor Group Innovation Center Singapore",
      period: "2025 – Present",
    },
    {
      role: "Data Engineer",
      company: "Azendian Solutions",
      period: "2024 – 2025",
    },
    {
      role: "Software Engineer Full-Stack Web",
      company: "Anacle Systems",
      period: "2023 – 2024",
    },
    {
      role: "Part-time IT Assistant/Administrator",
      company: "NTU Asian School of the Environment",
      period: "2020 – 2023",
    }
  ];

  const certifications = [
    {
      role: "Databricks Certified Data Engineer Associate",
      period: "2025 - 2027",
      pdf: PDF,
    }
  ];

  return (
    <section id="experience" className={`section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="section-content">
        <p className="section__text__p1" aria-hidden="true">Explore My</p>
        <h1 className="title">Work Experience</h1>
        <div className="timeline-container">
          {workExperiences.map(({ role, company, period }, index) => (
            <div 
              key={index} 
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{company}</h3>
                  <span className="period">{period}</span>
                </div>
                <div className="role">{role}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="title certifications-title">Professional Certifications</h2>
        <div className="certifications-container">
          {certifications.map(({ role, period, pdf }, index) => (
            <div 
              key={index} 
              className="certification-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="certification-header">
                <h3>{role}</h3>
                <span className="period">{period}</span>
              </div>
              <div className="certification-badge">
                <embed
                  src={pdf}
                  type="application/pdf"
                  width="100%"
                  height="400px"
                  className="pdf-preview"
                  title={role}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
