import React from 'react';

class Inicio extends React.Component{
    render(){
        const fondo = {
            backgroundColor: '#6699CC',
            padding: "15%",
            backgroundImage: "url( https://s3.envato.com/files/a4c2e1aa-9c57-4516-8d8b-9ae80aae23a5/inline_image_preview.jpg )",
            color: "#CC6600",
            fontFamily: 'Lacquer'
        }

        const subrayado = {
            textDecoration: 'underline'
        }

        const h1 = {
            fontSize: '6vp'
            
        }
       
     return (
        <React.Fragment>
            <header style={fondo} id="Inicio">
                <h1 style={subrayado}>Mario Canales</h1>
                <h3 style={subrayado}> FullStack Developer</h3>
            </header>
            
        </React.Fragment>
    );
}
}

export default Inicio;