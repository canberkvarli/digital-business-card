import "../stylesheets/info.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <div className="info">
      <h3>Canberk Varli</h3>
      <h2 className="alt-title">Software Engineer</h2>
      <a
        href="http://www.canberkvarli.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portoflio Website
      </a>

      <div className="buttons-container">
        <button
          style={{
            backgroundColor: "#24292e",
            color: "#FFFFFF",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            width: "6rem",
          }}
        >
          <a
            href="mailto:canberkvarli@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              position: "relative",
              bottom: "3px",
            }}
          >
            <FaEnvelope
              size={15}
              style={{
                marginRight: "5px",
                paddingTop: "5px",
                position: "relative",
                top: "3px",
              }}
            />
            <span style={{ marginBottom: "5px" }}>Email</span>
          </a>
        </button>

        <button
          style={{
            backgroundColor: "#0077b5",
            color: "#FFFFFF",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            width: "6rem",
          }}
        >
          <a
            href="https://www.linkedin.com/in/canberkvarli/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              position: "relative",
              bottom: "3px",
            }}
          >
            <FaLinkedin
              size={15}
              style={{
                marginRight: "5px",
                paddingTop: "5px",
                position: "relative",
                top: "3px",
              }}
            />
            <span style={{ margin: "10px;" }}>LinkedIn</span>
          </a>
        </button>
      </div>
    </div>
  );
}
