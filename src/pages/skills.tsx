import React from "react";
import { Link } from "react-router-dom";
import icono from "../assets/images/icono.png";
import "../styles/style.css";
import { moveWhitKeyBottom, moveWhitKeyTop } from "../utils/functions";

const Skills: React.FC = () => {
  moveWhitKeyTop("/home");
  moveWhitKeyBottom("/certifications");
  return (
    <>
      <header>
        <div id="icon">
          <img src={icono} alt="logo j johan" />
          <span>Johan</span>
          <span>Web Developer</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/skills" className="active">
                Skills
              </Link>
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
        <div id="contenedor-skills">
          <h1>
            Skill <i className="far fa-lightbulb"></i>
          </h1>
          <div className="skill">
            <h3 className="wow bounceInLeft">HTML</h3>
            <div className="bar-date" style={{ marginLeft: "90%" }}>
              <b>90%</b>
            </div>
            <div className="barra wow bounceInLeft">
              <div
                className="porcentaje wow animate__fadeInLeft"
                style={{
                  width: "90%",
                  visibility: "visible",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <h3 className="wow bounceInLeft">CSS</h3>
            <div className="bar-date" style={{ marginLeft: "95%" }}>
              <b>95%</b>
            </div>
            <div className="barra wow bounceInLeft">
              <div
                className="porcentaje wow animate__fadeInLeft"
                style={{
                  width: "95%",
                  visibility: "visible",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <h3 className="wow bounceInLeft">JAVASCRIPT</h3>
            <div className="bar-date" style={{ marginLeft: "80%" }}>
              <b>80%</b>
            </div>
            <div className="barra wow bounceInLeft">
              <div
                className="porcentaje wow animate__fadeInLeft"
                style={{
                  width: "80%",
                  visibility: "visible",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <h3 className="wow bounceInLeft">TYPESCRIPT</h3>
            <div className="bar-date" style={{ marginLeft: "85%" }}>
              <b>85%</b>
            </div>
            <div className="barra wow bounceInLeft">
              <div
                className="porcentaje wow animate__fadeInLeft"
                style={{
                  width: "85%",
                  visibility: "visible",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <h3 className="wow bounceInLeft">PHP</h3>
            <div className="bar-date" style={{ marginLeft: "40%" }}>
              <b>40%</b>
            </div>
            <div className="barra wow bounceInLeft">
              <div
                className="porcentaje wow animate__fadeInLeft"
                style={{
                  width: "40%",
                  visibility: "visible",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <h3 className="wow bounceInLeft">HARDWARE</h3>
            <div className="bar-date" style={{ marginLeft: "90%" }}>
              <b>90%</b>
            </div>
            <div className="barra wow bounceInLeft">
              <div
                className="porcentaje wow animate__fadeInLeft"
                style={{
                  width: "90%",
                  visibility: "visible",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <h3 className="wow bounceInLeft">BOOTSTRAP</h3>
            <div className="bar-date" style={{ marginLeft: "50%" }}>
              <b>50%</b>
            </div>
            <div className="barra wow bounceInLeft">
              <div
                className="porcentaje wow animate__fadeInLeft"
                style={{
                  width: "50%",
                  visibility: "visible",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <h3 className="wow bounceInLeft">REACT</h3>
            <div className="bar-date" style={{ marginLeft: "85%" }}>
              <b>85%</b>
            </div>
            <div className="barra wow bounceInLeft">
              <div
                className="porcentaje wow animate__fadeInLeft"
                style={{
                  width: "85%",
                  visibility: "visible",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <h3 className="wow bounceInLeft">GIT</h3>
            <div className="bar-date" style={{ marginLeft: "70%" }}>
              <b>70%</b>
            </div>
            <div className="barra wow bounceInLeft">
              <div
                className="porcentaje wow animate__fadeInLeft"
                style={{
                  width: "70%",
                  visibility: "visible",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { Skills };
