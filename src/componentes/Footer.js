import React from "react";
import styles from "./App/App.css";

import GitHub from "../Vector/GitHub-Mark-64px.png";
import LinkedIn from "../Vector/LI-In-Bug.png";

class Footer extends React.Component {
  render() {
    const footer = {
      backgroundColor: "#888",
      fontWeight: "bold",
      padding: "1%"
    };
    var texto = {
      color: "#fff",
      textDecoration: "underline #6699CC",
      fontSize: '3vh',
      fontWeight: '800',
      padding: "1% 5%"
    };

    let enlace = {
      color: 'white'
    }

    return (
      <React.Fragment>
        <footer style={footer} id="Footer">
          <div>
            <p style={texto}> Redes sociales </p>
          </div>
          <div>
            <a href="https://github.com/DrunkPsyduck" target="_blank" rel="noopener noreferrer">
              <img className={styles.img} src={GitHub} alt="GitHub" />
            </a>
            < a href = "https://www.linkedin.com/in/mariocanalessanchez/"
            target = "_blank"
            rel = "noopener noreferrer" >
              <img  src={LinkedIn} alt="LinkedIn" />
            </a>
          
          </div>
          <div>
              <a class="btn btn-primary" href='#Inicio' style={enlace}> Volver Arriba </a >
          </div>
        
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
