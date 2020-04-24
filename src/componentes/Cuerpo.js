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
            <h1>Sobre mi</h1>
            <p style={texto}></p>

            <p style={texto}>
              Si buscas la historio de un chico que aprendio a programar de
              manera autodidacta con 10 años y que crecio entre ordenadores y
              creando programas, entonces abandona esta página, por que esa no
              es mi historia...
              <ul style={{ listStyleType: "none"}}>
                <li>HTML5 + CSS3 + JS ES6</li>
                <li>MySQL</li>
                <li>PHP, Laravel</li>
                <li>JAVA, JAVA2EE</li>
                <li>React</li>
              </ul>
              A día de hoy puedo decir, que fui buen estudiante en mis dos últimos años como estudiante. Que estuve comprometido con mis estudios y que gracias a aquellas personas que estuvierón apoyandome
              estoy aquí para continuar creciendo.
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Cuerpo;
