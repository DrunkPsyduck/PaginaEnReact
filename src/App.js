import React from 'react';
import './App.css';

import Inicio from './componentes/Inicio.js';
import Cuerpo from './componentes/Cuerpo.js';
import Proyectos from './componentes/Proyectos.js';
import Footer from './componentes/Footer.js';


function App() {
  return (
    <body className="App">
      <Inicio />
      <Cuerpo />
      <Proyectos />

      <Footer />
    </body>
  );
}

export default App;
