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
            <br />
              
            <p style={texto}>
              Como desarrollador web conozco diversas tecnologías, pero eso no es todo. A parte de gustarme el mundo del desarrollo, también osy un apasionado a los deportes, tanto verlos como prácticarlos.<br/>

              Como dijo Oscar Wilde, "La experiencia es el nombre que damos a nuestros errores" y a pesar de la poca trayectoria que tengo, he cometido algúnos errores, pero nunca me he arrepentido de ellos, puesto que dichos errores, <br/>
              han hecho que mejore y me convierta en mejor persona y en mejor profesional. 
            </p>
          </div>

            <div>
              <h1> Mis conocimientos </h1><br/>
              <p style={texto}>
                A lo largo de los años he ido adquiriendo conocimientos de
                lenguajes de programación. Aunque la lista de lenguajes que
                describiré a continuación, es el minímo que cualquier estudiante
                de DAW tendrá, aun así, merece divulgarlo.
              </p>
              <ul style={{ listStyleType: "none" }}>
                <li>HTML5 + CSS3 + JS ES6</li>
                <li>MySQL</li>
                <li>PHP, Laravel</li>
                <li>JAVA, JAVA2EE</li>
                <li>XML</li>
                <li> jQuery </li>
              </ul>
              <p style={texto}>
                Estos lenguajes de programación, marcado o de bases de datos, son los aprendidos en DAW.
                Debido a la corta extensión del curso, normalmente, se explica lo más básico de su funcionamiento.<br/>
                Por ello prfundicé en algunos temas (Java, JavaScript, Laravel, HTML, CSS y SQL principalmente) y aprendí 
                más sobre su uso y funcionamiento, sobre todo con Laravel y JavaScript <br/><br/>
                También quise aprender más cosas, quise empezar por <u><span> React JS </span></u> y aprender lo más básico. Esta página empezo como 
                un proyecto para aprender cosas básicas de React.
                Además 
              </p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Cuerpo;
