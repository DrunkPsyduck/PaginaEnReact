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
              Si buscas la historio de un chico que aprendio a programar de
              manera autodidacta con 10 años y que crecio entre ordenadores y
              creando programas, entonces abandona esta página, por que esa no
              es mi historia...
            </p>
            <p style={texto}>
              Mi historia no es la de un estudiante modelo que saca todo
              sobresalientes, más bien es al reves.
            </p>
            <p>
              Durante muchos años, fui un mal estudiante, hasta que descubrí lo
              que realmente me gustaba. Cuando empecé a programar, fue un cambio
              radical, dejé de ser un estudiante mediocre a estar estudiando
              toda la tarde y a aprender cosas por mi cuenta.
            </p>
            <p style={texto}>
              En mis ratos libres me dedicaba a aprender nuevas partes de un
              lenguaje, a aprender otros lenguajes nuevos o a leer algún libro
              que nada tenía que ver con el mundo IT. En este periodo de tiempo,
              no solo realice cambios a nivel intelectual, si no también a nivel
              personal.{" "}
            </p>
            <p style={texto}>
              Cuanto más me formaba, más crecía a nivel personal. Se podría
              decir que mi historia, no es más que una serie de malas decisiones
              que me enseñaron mucho más que si no me hubiese equivocado. Como
              diría Oscar Wilde: “La experiencia es el nombre que damos a
              nuestros errores”.
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
                Estos lenguajes de programación, marcado o de bases de datos, son los aprendidos en el Grado Superior de DAW.
                Debido a la corta extensión del curso, normalmente, se explica lo más básico de su funcionamiento.
                Por ello prfundicé en algunos temas (Java, JavaScript, Laravel, HTML, CSS y SQL principalmente) y aprendí 
                más sobre su uso y funcionamiento. <br/><br/>
                También quise aprender más cosas, quise empezar por <u>React</u> y aprender lo más básico. Esta página empezo como 
                un proyecto para aprender cosas básicas de React.
              </p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Cuerpo;
