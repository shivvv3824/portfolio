import "./styles/Career.css";

const Career = () => {
  const careerItems = [
    {
      role: "Teaching Assistant",
      company: "Virginia Tech, Pamplin School of Business",
      time: "Jan 2026",
      description:
        "Graded work, office hours, and Canvas support for BIT & MGT courses; collaborated with faculty on materials and student experience.",
    },
    {
      role: "Software Engineer Intern",
      company: "Commenda — Bengaluru, India",
      time: "May 2025",
      description:
        "Backend in Golang and Node.js, PostgreSQL on AWS; shipped accounting features from idea to production within 24 hours in Agile.",
    },
    {
      role: "Business Development Intern",
      company: "MiroTec — Mumbai, India",
      time: "Jun 2024",
      description:
        "Sustainability strategy cutting costs 35% YoY; reengineered client engagement (+40% satisfaction, +25% repeat business).",
    },
    {
      role: "Data Analyst Intern",
      company: "Setco Inks — Gujarat, India",
      time: "Jun 2023",
      description:
        "Supply-chain and production analytics; −12% material waste. Dashboards and SQL/Excel automation for inventory and quality.",
    },
  ];

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerItems.map((item, index) => (
            <div className="career-info-box" key={`${item.time}-${index}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.time}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
