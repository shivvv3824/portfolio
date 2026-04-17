import "./styles/Certifications.css";

const items = [
  {
    name: "Google Cybersecurity Professional Certificate",
    time: "April 2026",
  },
  {
    name: "IBM Generative AI for Cybersecurity Professionals",
    time: "April 2026",
  },
  {
    name: "Python for Cybersecurity (Infosec)",
    time: "April 2026",
  },
  {
    name: "AWS Cloud Solutions Architect",
    time: "April 2026",
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section section-container" id="certifications">
      <div className="certifications-inner">
        <h2>
          Certifi<span>cations</span>
        </h2>
        <ul className="certifications-list">
          {items.map((item) => (
            <li key={item.name}>
              <span className="cert-name">{item.name}</span>
              <span className="cert-time">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
