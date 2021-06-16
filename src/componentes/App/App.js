import React from "react";
import "./App.css";

import Inicio from "../Inicio.js";
import Cuerpo from "../Cuerpo.js";
import Conocimientos from "../Conocimientos/Conocimientos.js";
import Educacion from "../Educacion/Educacion.js";
import Proyectos from "../Proyectos.js";
import Footer from "../Footer.js";
import Navegacion from "../Navegacion.js";
import Router from "../Router"

function App() {
  return (
    <div className="App">
        
      <Inicio />
      
      <Navegacion />
      <Cuerpo />
      <Conocimientos />
      <Educacion />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
