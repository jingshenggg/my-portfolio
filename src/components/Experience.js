import "./Experience.css";
import PDF from "../assets/Databricks Certified Data Engineer Associate.pdf";

function Experience() {
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
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Work Experience</h1>
      <div className="timeline-container">
        {workExperiences.map(({ role, company, period }, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{company} ({role})</h3>
              <span className="period">{period}</span>
            </div>
          </div>
        ))}
      </div>

      <h1 className="title">Certification</h1>
      <div className="timeline-container">
        {certifications.map(({ role, period, pdf }, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content certification-item">
              <h3>{role}</h3>
              <span className="period">{period}</span>
              <div className="certification-badge">
                <embed
                  src={pdf}
                  type="application/pdf"
                  width="300px"
                  height="400px"
                  className="pdf-preview"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
