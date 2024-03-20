import "../stylesheets/info.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <div className="info">
      <h3>Canberk Varli</h3>
      <h2 className="alt-title">Software Engineer</h2>
      <a href="http://www.canberkvarli.com" target="_blank" rel="noopener noreferrer">
        Portoflio Website
      </a>

      <div className="buttons-container">
        <button style={{ backgroundColor: "#24292e", color: "#FFFFFF", border: "none", padding: "5px 10px", borderRadius: "5px" }}>
          <a href="https://github.com/canberkvarli" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            <FaGithub size={20} style={{ marginRight: "10px"}} />
            <span>Github</span>
          </a>
        </button>

        <button style={{ backgroundColor: "#0077b5", color: "#FFFFFF", border: "none", padding: "5px 10px", borderRadius: "5px" }}>
          <a href="https://www.linkedin.com/in/canberkvarli/" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            <FaLinkedin size={20} style={{ marginRight: "10px" }} />
            <span>LinkedIn</span>
          </a>
        </button>
      </div>
    </div>
  );
}
