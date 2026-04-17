import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a proactive student blending technical depth with business judgment. I focus on
          Cybersecurity Management & Analytics at Virginia Tech (B.S., May 2026; GPA 3.80) —
          Dean&apos;s List (Fall 2025) and Pamplin Engage Teaching Assistant — and hold a B.Tech
          in CSE (Data Science) from NMIMS Mumbai (2025; GPA 3.35). Based in Blacksburg, VA.
        </p>
        <p className="para">
          I love turning data into decisions: backend systems in Go and Node.js, PostgreSQL on
          AWS, ML for fraud and security, and Splunk / Tableau / Power BI for operators and
          executives. I am seeking a Summer 2026 internship in data science, analytics, or
          cybersecurity where I can ship real features and strengthen defenses.
        </p>
      </div>
    </div>
  );
};

export default About;
