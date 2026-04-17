import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SHIV
              <br />
              <span>TANDEL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 className="landing-tagline">
              Cybersecurity & Analytics
              <span className="landing-headline-more"> · Business & Data</span>
            </h3>
            <div className="landing-hero-lines" aria-hidden="false">
              <div className="landing-hero-line landing-hero-line--accent">
                Cybersecurity
              </div>
              <div className="landing-hero-line landing-hero-line--accent">
                Analytics
              </div>
            </div>
            <div className="landing-roles-line">
              <span className="landing-role">Developer</span>
              <span className="landing-role-sep">·</span>
              <span className="landing-role">Security Analyst</span>
            </div>
            <p className="landing-roles-sub">
              Software · Security &amp; GRC
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
