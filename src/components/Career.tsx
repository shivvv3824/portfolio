import "./styles/Career.css";

const Career = () => {
  const careerItems = [
    {
      role: "Teaching Assistant",
      company: "Virginia Tech, Pamplin School of Business",
      time: "2026",
      description:
        "Graded assignments and exams, hosted office hours, and supported two Pamplin courses (BIT & MGT). Collaborated with the professor to manage course materials on Canvas and improve the overall learning experience.",
    },
    {
      role: "Software Engineer Intern",
      company: "Commenda — Bengaluru, India",
      time: "May 2025 – Jul 2025",
      description:
        "Engineered core backend infrastructure using Golang and Node.js to power an integrated product suite and optimized PostgreSQL databases for maximum efficiency within an AWS environment. Delivered new accounting features from concept to production within 24 hours in a fast-paced Agile environment.",
    },
    {
      role: "Business Development Intern",
      company: "MiroTec — Mumbai, India",
      time: "Jun 2024 – Jul 2024",
      description:
        "Formulated a sustainability strategy integrating eco-friendly practices into business operations, enhancing partner relations and achieving a 35% reduction in operational costs within the first year. Led a strategic business transformation project involving reengineering client engagement processes and boosting communication channels, improving client satisfaction scores by 40% and driving a 25% increase in repeat business.",
    },
    {
      role: "Data Analyst Intern",
      company: "Setco Inks — Gujarat, India",
      time: "Jun 2023 – Aug 2023",
      description:
        "Analyzed production and supply chain datasets (inventory levels, procurement costs, and delivery timelines) to uncover inefficiencies and decrease material waste by 12%, improving overall operational efficiency. Developed dashboards and automated reports using Excel and SQL, enabling real-time insights into chemical inventory, procurement trends, and quality metrics.",
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
