import React from 'react';
import estilo from "./App/App.css";
import "./App/App.css";

import flecha from '../Imagenes/descargar.svg';
import img from '../Imagenes/12.PNG';

class Inicio extends React.Component{
    render(){
        const fondo = {
            height: '100vh',
            width: '100',
            backgroundImage:  `url(${img})`,
              filter: 'blur(0px)',
            //transform: 'rotate(90deg)',
            backgroundColor: '#3f3f3f',
            padding: "15% 5%",
           
           overflow: 'none'
            
        }
       
        
        const posFlecha = {
            width: '10%',
            paddingTop: '10%',
            hover: 'width: 18%'
        }
        const texto = {
          textDecoration: "underline",
          fontFamily: "Josefin sans",
          fontWeight: 100,
          color: "#CC6600"
        };

      
     return (
       <React.Fragment>
         <div className={estilo.portada} style={fondo} id="Inicio">
           <h1 style={texto}>Mario Canales</h1>
           <h4 style={texto}> Desarrollador web, multicloud y multiplataforma</h4>

           <a href="#About">
             <img src={flecha} style={posFlecha} alt="flecha"></img>
           </a>
         </div>
       </React.Fragment>
     );
}
}

export default Inicio;