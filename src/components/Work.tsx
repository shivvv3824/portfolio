import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const makeProjectThumb = (opts: {
    badge: string;
    title: string;
    accent: string;
  }) => {
    const { badge, title, accent } = opts;
    const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;"); // basic escaping

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#0b080c"/>
            <stop offset="1" stop-color="#1a1030"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1200" height="750" rx="48" fill="url(#g)"/>
        <circle cx="980" cy="120" r="180" fill="${accent}" opacity="0.18"/>
        <circle cx="250" cy="650" r="220" fill="${accent}" opacity="0.10"/>
        <rect x="80" y="80" width="1040" height="590" rx="36" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)"/>
        <g>
          <rect x="110" y="130" width="270" height="70" rx="35" fill="${accent}" opacity="0.22" stroke="rgba(255,255,255,0.18)"/>
          <text x="245" y="176" text-anchor="middle" font-size="34" font-family="Arial, sans-serif" fill="#ffffff" opacity="0.95" letter-spacing="1">${badge}</text>
        </g>
        <g>
          <text x="110" y="315" font-size="46" font-family="Arial, sans-serif" fill="#ffffff" opacity="0.95" letter-spacing="0.5">${safeTitle}</text>
          <text x="110" y="372" font-size="22" font-family="Arial, sans-serif" fill="#ffffff" opacity="0.55">Project Thumbnail</text>
        </g>
        <g opacity="0.9">
          <path d="M820 520 C860 430, 950 430, 990 520" fill="none" stroke="${accent}" stroke-width="10" stroke-linecap="round"/>
          <path d="M740 560 C820 460, 920 460, 1000 560" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="8" stroke-linecap="round"/>
          <circle cx="815" cy="520" r="10" fill="${accent}"/>
          <circle cx="990" cy="520" r="10" fill="${accent}"/>
        </g>
      </svg>
    `.trim();

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };

  const projects = [
    {
      title: "GRC Risk Assessment Automation Tool",
      category: "Python • SQL • Power BI • NIST CSF • Jan 2026 – May 2026",
      tools:
        "Designed a Python-based compliance scoring tool that maps organizational controls to NIST Cybersecurity Framework (CSF) categories, auto-generating risk heatmaps and gap analysis reports from structured SQL input data. Developed a Power BI dashboard surfacing real-time compliance posture across five control domains (Identify, Protect, Detect, Respond, Recover), enabling prioritized remediation tracking for simulated enterprise audit scenarios.",
      image: makeProjectThumb({
        badge: "GRC",
        title: "NIST CSF",
        accent: "#77a7ff",
      }),
    },
    {
      title: "SIEM Log Analysis & Threat Hunting Dashboard",
      category: "Splunk • Python • Security Analytics • Aug 2025 – Dec 2025",
      tools:
        "Ingested and parsed 500,000+ simulated Windows event logs and syslog entries into Splunk, writing SPL queries to detect brute-force login attempts, lateral movement patterns, and privilege escalation events mapped to MITRE ATT&CK. Built a Python-based log enrichment script to auto-correlate IP addresses against threat intelligence feeds (AbuseIPDB, VirusTotal API), reducing manual analyst investigation time by an estimated 40% in simulated triage exercises.",
      image: makeProjectThumb({
        badge: "SIEM",
        title: "Threat Hunting",
        accent: "#58f2d1",
      }),
    },
    {
      title: "Network Intrusion Detection System",
      category: "Machine Learning • Cybersecurity • Jan 2025 – May 2025",
      tools:
        "Built a supervised ML pipeline in Python using Random Forest and XGBoost to classify malicious network traffic from the NSL-KDD dataset, achieving 96.4% detection accuracy while reducing false positives by 18% compared to a baseline threshold model. Engineered 20+ features from raw packet metadata (protocol type, flag distribution, byte ratios) and visualized attack pattern clusters using Matplotlib and Seaborn, producing a threat dashboard for SOC-style alert triage.",
      image: makeProjectThumb({
        badge: "ML",
        title: "IDS / NSL-KDD",
        accent: "#c2a4ff",
      }),
    },
    {
      title: "Financial Fraud Detection & Risk Scoring",
      category: "Machine Learning • Data Analytics • Aug 2024 – Dec 2024",
      tools:
        "Developed an end-to-end fraud detection system on a 284,000-transaction dataset using XGBoost and Logistic Regression with SMOTE oversampling to address class imbalance, achieving a precision-recall AUC of 0.97 and flagging fraudulent transactions with 94.2% accuracy. Built an interactive risk-scoring dashboard in Tableau visualizing transaction anomalies, high-risk merchant categories, and temporal fraud trends — designed to simulate a real-time analyst review workflow.",
      image: makeProjectThumb({
        badge: "FRAUD",
        title: "Risk Scoring",
        accent: "#ffd166",
      }),
    },
    {
      title: "Fraud Detection Analysis",
      category: "Machine Learning • Fraud Analytics",
      tools:
        "Compared Logistic Regression and Decision Tree models using a Kaggle fraud dataset. Achieved 99.97% accuracy and 0.889 F1-score (Decision Tree). Engineered features, applied one-hot encoding, and performed standard scaling. Proposed improvements including ensemble methods and class-balancing techniques.",
      image: makeProjectThumb({
        badge: "ML",
        title: "Fraud Detection",
        accent: "#c2a4ff",
      }),
    },
    {
      title: "Banking Intelligent Automation System (BIAS)",
      category: "Project Management • Cloud/AI Automation",
      tools:
        "Managed scope, timeline, risk, and stakeholder communications for a cloud/AI-driven banking automation initiative.",
      image: makeProjectThumb({
        badge: "AUTOMATE",
        title: "Banking AI",
        accent: "#9ad1ff",
      }),
    },
    {
      title: "Khadi Looms × Fendi",
      category: "Strategy Consulting • International Market Entry",
      tools:
        "Designed a joint-venture entry into Italy; delivered PESTEL, competitive/financial analysis, and go-to-market strategy. Served as Retail & Sales lead.",
      image: makeProjectThumb({
        badge: "STRATEGY",
        title: "Market Entry",
        accent: "#ff9bd6",
      }),
    },
    {
      title: "Jio Platforms Ltd. — Organizational & Strategy Analysis",
      category: "Business Strategy • Management Frameworks",
      tools:
        "Applied Mintzberg’s roles, ratio analysis, and control frameworks. Recommended leadership, HR, and operations strategies.",
      image: makeProjectThumb({
        badge: "ANALYZE",
        title: "Org Strategy",
        accent: "#58f2d1",
      }),
    },
    {
      title: "Smart Airport Network Design",
      category: "Networking • Cisco Packet Tracer Simulation",
      tools:
        "Prototyped a segmented airport network with NAT, routing, and IoT integration. Validated 100% connectivity and optimized data-flow latency by 15%.",
      image: makeProjectThumb({
        badge: "NETWORK",
        title: "Airport IoT",
        accent: "#ffd166",
      }),
    },
    {
      title: "Uber vs. Lyft Cost Efficiency Model",
      category: "Python • Stats & Business Visualization",
      tools:
        "Built a transportation-cost optimization model using Python. Reduced cost variance by 18% and visualized comparative costs with Plotly.",
      image: makeProjectThumb({
        badge: "MODEL",
        title: "Cost Efficiency",
        accent: "#77a7ff",
      }),
    },
    {
      title: "Fake Currency Recognition System",
      category: "Image & Video Processing",
      tools:
        "Implemented an image-processing pipeline (feature extraction + classification) to authenticate Indian notes across denominations; foundational work for a research paper.",
      image: makeProjectThumb({
        badge: "VISION",
        title: "Currency ID",
        accent: "#c2a4ff",
      }),
    },
  ];

  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const workSection = document.querySelector(
        ".work-section"
      ) as HTMLElement | null;
      if (!workSection) return;

      const boxes = Array.from(
        document.querySelectorAll(".work-box")
      ) as HTMLElement[];
      if (boxes.length === 0) return;

      const lastBox = boxes[boxes.length - 1];
      translateX =
        lastBox.offsetLeft + lastBox.offsetWidth - workSection.clientWidth;
      translateX = Math.max(0, translateX);
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
