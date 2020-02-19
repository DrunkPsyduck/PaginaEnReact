import React from 'react';
import estilo from "../App.css";

import flecha from '../Vector/Arrow.svg';
import img from '../Imagenes/5.jpg';

class Inicio extends React.Component{
    render(){
        const fondo = {
            height: '140vh',
            backgroundImage:  `url(${img})`,
            //transform: 'rotate(90deg)',
            backgroundColor: '#3f3f3f',
            padding: "25% 15%",
            //backgroundImage: "url( https://s3.envato.com/files/a4c2e1aa-9c57-4516-8d8b-9ae80aae23a5/inline_image_preview.jpg )",
            color: "#CC6600"
            
        }
        
        
        const posFlecha = {
            paddingTop: '45%'
        }
        const subrayado = {
            textDecoration: 'underline',
            fontFamily: 'Lacquer'
        }

      
     return (
        <React.Fragment>
            <div className={estilo.portada} style={fondo} id="Inicio">
                <h1 style={subrayado}>Mario Canales</h1>
                <h4 style={subrayado}> FUllStack Web Developer</h4>
                < a href = "#navbarNavDropdown" >
                    <img src={flecha} style={posFlecha} alt=""></img></a>
            </div>
            
        </React.Fragment>
    );
}
}

export default Inicio;