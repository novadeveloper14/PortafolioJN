import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icono from "../assets/images/icono.png";
import pcImage from "../assets/images/pc.png";
import codeImage from "../assets/images/code.png";
import "../styles/style.css";
import { moveWhitKeyBottom } from "../utils/functions";

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const text = "Hi, I'm Johan Nova </>";
  const cursor = "|";

  useEffect(() => {
    let i = 0;
    let typingTimeout: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;
    const typed = sessionStorage.getItem("typed");

    if (typed === "true") {
      setDisplayText(text + cursor); // Mostrar texto completo inmediatamente
    } else {
      const typeWriter = () => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i += 1;
          typingTimeout = setTimeout(typeWriter, 100);
        } else {
          sessionStorage.setItem("typed", "true");
          cursorInterval = setInterval(() => {
            setDisplayText((prev) =>
              prev.endsWith(cursor) ? prev.slice(0, -1) : prev + cursor
            );
          }, 500);
        }
      };
      typeWriter();
    }

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  moveWhitKeyBottom("/skills");

  return (
    <>
      <header>
        <div id="icon">
          <img src={icono} alt="logo j johan" id="imagen-bug" />
          <span>Johan</span>
          <span>Web Developer</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/home" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/certifications">Certifications</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <div id="contacts">
          <a href="#" title="github">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" title="linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" title="instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </header>
      <main>
        <div id="container1">
          <h1 id="demo">{displayText}</h1>
          <span>Frontend Developer</span>
          <p>
            Hello, welcome to my virtual portfolio. My name is Johan Daniel
            Garcia Nova, and I am a web developer currently studying analysis
            and development of information systems at SENA. I am 18 years old,
            based in Bogota, and started with web development when I was 17. I
            work virtually at "SISTEMAS EN LINEA S.A." in a development team
            focused on Frontend web development, dedicated to meeting our
            customers' demands.
          </p>
          <div id="boton-contact">
            <a href="#">
              Contact me / <i className="far fa-hand-point-up"></i>
            </a>
          </div>
        </div>
        <div id="container2">
          <div id="imagen1">
            <Link to="/skills">
              <div>
                <img src={pcImage} alt="computador chill cafe" />
              </div>
              <span>Skills</span>
            </Link>
          </div>
          <div id="imagen2">
            <Link to="/projects">
              <div>
                <img src={codeImage} alt="codigo programacion Frontend" />
              </div>
              <span>Projects</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export { Home };
