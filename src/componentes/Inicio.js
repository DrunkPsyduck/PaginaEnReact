import React from 'react';
import estilo from "../App.css";
import "../App.css";

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
            //backgroundImage: "url( https://s3.envato.com/files/a4c2e1aa-9c57-4516-8d8b-9ae80aae23a5/inline_image_preview.jpg )",
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
           <h1 style={texto}>Mario {/* // D1ST0RS10N */}</h1>
           <h4 style={texto}> FullStack web Developer</h4>

           <a href="#About">
             <img src={flecha} style={posFlecha} alt="flecha"></img>
           </a>
         </div>
       </React.Fragment>
     );
}
}

export default Inicio;