import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingText = new SplitText(
    [".landing-tagline", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const TextProps = { type: "chars,lines", linesClass: "split-h2" };
  const heroLines = new SplitText(".landing-hero-line", TextProps);
  gsap.fromTo(
    heroLines.chars,
    { opacity: 0, y: 50, filter: "blur(4px)" },
    {
      opacity: 1,
      duration: 1,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.03,
      delay: 0.55,
    }
  );

  const rolesLine = new SplitText(".landing-roles-line", TextProps);
  gsap.fromTo(
    rolesLine.chars,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      y: 0,
      stagger: 0.02,
      delay: 0.85,
    }
  );

  gsap.fromTo(
    ".landing-roles-sub",
    { opacity: 0, y: 12 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 1.05,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
