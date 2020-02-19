import React from 'react';
import estilo from "../App.css";

import flecha from '../Vector/Arrow.svg';

class Inicio extends React.Component{
    render(){
        const fondo = {
            height: '100vh',
            backgroundColor: '#6699CC',
            padding: "25% 15%",
           // backgroundImage: "url( https://s3.envato.com/files/a4c2e1aa-9c57-4516-8d8b-9ae80aae23a5/inline_image_preview.jpg )",
            color: "#CC6600"
            
            
        }
        const posFlecha = {
            paddingTop: '70%'
        }
        const subrayado = {
            textDecoration: 'underline',
            fontFamily: 'Lacquer'
        }

      
     return (
        <React.Fragment>
            <div className={estilo.portada} style={fondo} id="Inicio">
                <h1 style={subrayado}>Mario Canales</h1>
                <h4 style={subrayado}> Hago cosas interesantes. Toma la libertad de curiosear por aquí</h4>
                < a href = "#navbarNavDropdown" >
                    < img src = {
                        flecha
                    }
                    style = {
                        posFlecha
                    }
                    /></a >
            </div>
            
        </React.Fragment>
    );
}
}

export default Inicio;