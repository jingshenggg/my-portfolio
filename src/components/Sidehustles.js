import "../css/Sidehustles.css";

function Sidehustles() {
  const sidehustles = [
    {
      role: "YouTube Content Creator",
      projects: [
        {
          title: "Mr. JS",
          url: "https://www.youtube.com/@hellothisisjs", // Replace with your actual channel URL
          description: ["Travel vlogs"],
          videos: ["TZlbHh4KBwQ", "6x44Rg6cOpw"],
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
      <div className="content-container">
        {sidehustles.map(({ role, projects }, index) => (
          <div key={index} className="content-section">
            <div className="intro-section">
              <h2 className="role-title">{role}</h2>
              <p className="description">
                During my free time, I love creating travel vlogs and piano videos on YouTube. 
                Traveling allows me to explore new cultures and landscapes, and I enjoy capturing those moments to share stories that inspire others to see the world through my eyes.
                On the music side, playing the piano helps me unwind and express creativity in a different way.
              </p>
            </div>
            
            <div className="projects-grid">
              {projects.map((proj, i) => (
                <div key={i} className="project-card">
                  <div className="project-header">
                    <h3 className="project-title">
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="channel-link"
                      >
                        {proj.title}
                      </a>
                    </h3>
                    <ul className="project-tags">
                      {proj.description.map((item, j) => (
                        <li key={j} className="tag">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {proj.videos.length > 0 && (
                    <div className="video-grid">
                      {proj.videos.map((videoId, k) => (
                        <div key={k} className="video-wrapper">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`${proj.title} video ${k + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
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
