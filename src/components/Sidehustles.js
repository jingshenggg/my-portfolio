import React from "react";
import "./Sidehustles.css";

function Sidehustles() {
  const sidehustles = [
    {
      role: "YouTube Content Creator",
      period: "2025 - Present",
      projects: [
        {
          title: "Mr. JS",
          url: "https://www.youtube.com/@hellothisisjs", // Replace with your actual channel URL
          description: ["Travel vlogs"],
          videos: ["qA4seXB4Exw", "nP1D96R2XGk"],
        },
        {
          title: "Just Piano Vibes",
          url: "https://www.youtube.com/@justpianovibes", // Replace with your actual channel URL
          description: ["Self-learned piano journey"],
          videos: ["2a9Tj_udZgM", "lyyz1FUgk_c"],
        },
      ],
    },
  ];

  return (
    <section id="sidehustles">
      <p className="section__text__p1">Sharing My</p>
      <h1 className="title">Side Hustles</h1>
      <div className="timeline-container">
        {sidehustles.map(({ role, period, projects }, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{role}</h3>
              <span className="period">{period}</span>

              {projects.map((proj, i) => (
                <div key={i} className="project-block">
                  <h4>
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.title}
                    </a>
                  </h4>
                  <ul>
                    {proj.description.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>

                  {proj.videos.length > 0 && (
                    <div className="video-container">
                      {proj.videos.map((videoId, k) => (
                        <iframe
                          key={k}
                          width="640"
                          height="360"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`YouTube video ${k}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sidehustles;
