import "../stylesheets/footer.css";
import { FaGithub, FaLinkedin, FaGlobe, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links-container">
        <a
          href="https://github.com/canberkvarli"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFFFFF" }}
        >
          <FaGithub size={25} color="white" />
        </a>

        <a
          href="https://www.linkedin.com/in/canberkvarli/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFFFFF" }}
        >
          <FaLinkedin size={25} color="white" />
        </a>
        <a
          href="http://www.canberkvarli.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFFFFF" }}
        >
          <FaGlobe size={25} color="white" />
        </a>
        <a
          href="https://www.twitter.com/canberkvarli"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFFFFF" }}
        >
          <FaTwitterSquare size={25} color="white" />
        </a>
      </div>
    </footer>
  );
}
