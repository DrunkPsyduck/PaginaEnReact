import React from "react";

class Cuerpo extends React.Component {
  render() {
    var section = {
      backgroundColor: "#232b2b",
      color: "white",
      padding: "1%",
    };

    const texto = {
      padding: "0% 9% 4% 8%",
      fontWeight: "400",
    };

    return (
      <div id="About">
        <section style={section}>
          <article>
            <div>
            <h1>Sobre mí</h1> 
            Especialista en el desarrollo de Aplicaciones Web, desarrollo de aplicaciones multiplataforma y desarrollo de soluciones en la nube con Azure y AWS.
            <br/>
            He trabajado con distintas tecnologías web, siendo .NET y Node.JS los lenguajes en los que más me gusta desarrollar haciendo uso también de los frameworks React y Angular.
            Gracias a la experiencia trabajando con .NET y C#, soy capaz de desarrollar aplicaciones multiplataforma con Xamarin.
            <br />
            <p>Entusiasta del deporte al aire libre y de disfrutar de los pequeños detalles del día a día. No todo iba a ser hablar sobre lo que se hacer.<br /></p>
            <p>Me gusta disfrutar de un día al aire libre mientras camino por el campo o realizo algun tipo de deporte, ya sea solo o en compañia. </p>
          </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Cuerpo;
