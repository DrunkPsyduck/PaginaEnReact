import React from "react";
import "./App.css";

import Inicio from "./componentes/Inicio.js";
import Cuerpo from "./componentes/Cuerpo.js";
import Proyectos from "./componentes/Proyectos.js";
import Footer from "./componentes/Footer.js";
import Navegacion from "./componentes/Navegacion.js";

function App() {
  return (
    <body className="App">
      {/*Esto es un comentario JSX
              Los componentes se muestras en la pagina segun se etiqueten: En este caso Primero ira <Inicio /> y luego <Navbar />
            */}
      <div>
      <Inicio />
      </div>
      <Navegacion /> 
      
      <Cuerpo />
      <Proyectos />
      
      <Footer />
    </body>
  );
}

export default App;
