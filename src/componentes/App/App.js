import React from "react";
import "./App.css";

import Inicio from "../Inicio.js";
import Cuerpo from "../Cuerpo.js";
import Conocimientos from "../Conocimientos.js";
import Proyectos from "../Proyectos.js";
import Footer from "../Footer.js";
import Navegacion from "../Navegacion.js";
import Router from "../Router"

function App() {
  return (
    <div className="App">
      <Router/>           
      <Inicio />
      
      <Navegacion />
      <Cuerpo />
      <Conocimientos />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
