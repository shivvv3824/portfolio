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
            <h3>
              Cybersecurity & Analytics
              <span className="landing-headline-more"> · Business & Data</span>
            </h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cybersecurity</div>
              <div className="landing-h2-2">Analytics</div>
            </h2>
            <h2 className="landing-roles-row">
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Security Analyst</div>
            </h2>
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
