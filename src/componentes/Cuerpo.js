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
            <h1>Sobre mí</h1>
            <p style={texto}></p>

            <p style={texto}>
              Si buscas la historio de un chico que aprendio a programar de
              manera autodidacta con 10 años y que crecio entre ordenadores y
              creando programas, entonces abandona esta página, por que esa no
              es mi historia...
              <br/>
              <h1>  Mis conocimientos </h1>
              <p style={texto}>
                A lo largo de los años he ido adquiriendo conocimientos de lenguajes de programación. Aunque la lista de lenguajes que describiré a continuación, es el minímo que cualquier estudiante de 
                DAW tendrá, aun así, merece divulgarlo.

              </p>
              <ul style={{ listStyleType: "none"}}>
                <li>HTML5 + CSS3 + JS ES6</li>
                <li>MySQL</li>
                <li>PHP, Laravel</li>
                <li>JAVA, JAVA2EE</li>
                <li>XML</li>
                <li> jQuery </li>
                <li>React Js</li>
              </ul>
              <br></br>
         
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Cuerpo;
