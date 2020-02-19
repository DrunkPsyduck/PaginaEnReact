import React from "react";
import "../App.css";

import GitHub from "../Vector/GitHub-Mark-64px.png";
import LinkedIn from "../Vector/LI-In-Bug.png";

class Footer extends React.Component {
  render() {
    const footer = {
      backgroundColor: "#99CCFF",
      fontWeight: "bold",
      padding: "1%"
    };
    var texto = {
      color: "#CC6600",
      textDecoration: "underline #6699CC",
      padding: "1% 5%"
    };

    var rojo = {
      backgroundColor: "red",
      color: "red"
    };

    var amarillo = {
      backgroundColor: "yellow",
      color: "red",
      padding: "0.5%"
    };
    return (
      <React.Fragment>
        <footer style={footer}>
          <div>
            <p style={texto}> Redes sociales </p>
          </div>
          <div>
            <a href="https://github.com/DrunkPsyduck" target="_blank">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/mariocanalessanchez/"
              target="_blank"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          
          <div>
            <div style={rojo}> . </div>
            <div style={amarillo}> Desarrollado en España </div>
            <div style={rojo}> . </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
