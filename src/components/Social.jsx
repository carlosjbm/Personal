import "./Social.css";
import github from "../assets/github.svg";

function Social() {
  return (
    <div className="social">
      <a href="https://github.com/carlosjbm" target="_blank" rel="noreferrer">
        <img className="social-icon" src={github} alt="GitHub" />
      </a>
    </div>
  );
}

export default Social;
