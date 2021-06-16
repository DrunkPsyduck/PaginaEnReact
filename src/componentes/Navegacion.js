import React from "react";
import "./App/App.css";

class Navegacion extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
          id="#nav"
        >
          <button
            className="navbar-toggler"
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
                <a class="nav-link" href="#Conocimientos">
                  Conocimientos
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#Educacion">
                  Educacion
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#Proyectos">
                  Mis Proyectos
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#Footer">
                  Redes Sociales
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
