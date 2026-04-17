import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am based in Blacksburg, VA, completing a B.S. in Business — Cybersecurity
          Management and Analytics at Virginia Tech&apos;s Pamplin College of Business
          (expected May 2026; GPA 3.80/4). Dean&apos;s List (Fall 2025) and Pamplin Engage
          Teaching Assistant. I previously earned a B.Tech in Computer Science and
          Engineering (Data Science) from SVKM&apos;s NMIMS, Mumbai (2025; GPA 3.35/4).
        </p>
        <p className="para">
          I engineer backend infrastructure (Golang, Node.js, PostgreSQL, AWS), build ML
          and analytics pipelines for security and fraud problems, and work with Splunk,
          Tableau, Power BI, and NIST CSF–aligned GRC workflows.
        </p>
        <p className="para">
          <strong>Certifications:</strong> Google Cybersecurity Professional; IBM Generative AI
          for Cybersecurity Professionals; Python for Cybersecurity (Infosec); AWS Cloud
          Solutions Architect — expected April 2026.
        </p>
      </div>
    </div>
  );
};

export default About;
