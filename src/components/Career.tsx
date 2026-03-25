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
      company: "Commenda, Bengaluru, India",
      time: "2025",
      description:
        "Built core backend infrastructure using Go and Node.js to power an integrated product suite. Optimized PostgreSQL for performance within AWS and delivered new accounting features from concept to production in 24 hours in an Agile environment.",
    },
    {
      role: "Business Development Intern",
      company: "MiroTec, Mumbai, India",
      time: "2024",
      description:
        "Formulated a sustainability strategy by integrating eco-friendly practices into operations, reducing operational costs by 35% in the first year. Led a client engagement reengineering effort that improved satisfaction by 40% and drove 25% repeat business.",
    },
    {
      role: "Data Analyst Intern",
      company: "Setco Inks, Gujarat, India",
      time: "2023",
      description:
        "Analyzed production and supply chain datasets (inventory, procurement costs, delivery timelines) to reduce material waste by 12%. Built dashboards and automated SQL/Excel reports for real-time insights into chemical inventory, procurement trends, and quality metrics.",
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
