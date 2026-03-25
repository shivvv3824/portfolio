import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      title: "Fraud Detection Analysis",
      category: "Machine Learning • Fraud Analytics",
      tools:
        "Compared Logistic Regression and Decision Tree models using a Kaggle fraud dataset. Achieved 99.97% accuracy and 0.889 F1-score (Decision Tree). Engineered features, applied one-hot encoding, and performed standard scaling. Proposed improvements including ensemble methods and class-balancing techniques.",
      image: "/images/placeholder.webp",
    },
    {
      title: "Banking Intelligent Automation System (BIAS)",
      category: "Project Management • Cloud/AI Automation",
      tools:
        "Managed scope, timeline, risk, and stakeholder communications for a cloud/AI-driven banking automation initiative.",
      image: "/images/placeholder.webp",
    },
    {
      title: "Khadi Looms × Fendi",
      category: "Strategy Consulting • International Market Entry",
      tools:
        "Designed a joint-venture entry into Italy; delivered PESTEL, competitive/financial analysis, and go-to-market strategy. Served as Retail & Sales lead.",
      image: "/images/placeholder.webp",
    },
    {
      title: "Jio Platforms Ltd. — Organizational & Strategy Analysis",
      category: "Business Strategy • Management Frameworks",
      tools:
        "Applied Mintzberg’s roles, ratio analysis, and control frameworks. Recommended leadership, HR, and operations strategies.",
      image: "/images/placeholder.webp",
    },
    {
      title: "Smart Airport Network Design",
      category: "Networking • Cisco Packet Tracer Simulation",
      tools:
        "Prototyped a segmented airport network with NAT, routing, and IoT integration. Validated 100% connectivity and optimized data-flow latency by 15%.",
      image: "/images/placeholder.webp",
    },
    {
      title: "Uber vs. Lyft Cost Efficiency Model",
      category: "Python • Stats & Business Visualization",
      tools:
        "Built a transportation-cost optimization model using Python. Reduced cost variance by 18% and visualized comparative costs with Plotly.",
      image: "/images/placeholder.webp",
    },
    {
      title: "Fake Currency Recognition System",
      category: "Image & Video Processing",
      tools:
        "Implemented an image-processing pipeline (feature extraction + classification) to authenticate Indian notes across denominations; foundational work for a research paper.",
      image: "/images/placeholder.webp",
    },
  ];

  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
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
    x: -translateX,
    ease: "none",
  });

  // Clean up
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
