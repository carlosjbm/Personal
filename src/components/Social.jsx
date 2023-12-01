import "./Social.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
// import ig from "../assets/ig.svg";

function Social() {
  return (
    <div className="social">
      <a href="https://github.com/carlosjbm" target="_blank" rel="noreferrer">
        <img className="social-icon" src={github} alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/carlosjbm/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="social-icon" src={linkedin} alt="Linkedin" />
      </a>
      {/* <a
        href="https://instagram.com/@carlosborges9196"
        target="_blank"
        rel="noreferrer"
      >
        <img className="social-icon" src={ig} alt="IG" />
      </a> */}
    </div>
  );
}

export default Social;
