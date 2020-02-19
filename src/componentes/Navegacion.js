import React from "react";
import '../App.css';

class Navegacion extends React.Component {
  render() {
    const color = {
      backgroundColor: "#000",
      padding: "5%",
      color: "white"
    };


    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#Inicio">
                  Inicio <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#About">
                  Sobre Mí
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Proyectos">
                  Mis Proyectos
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navegacion;
