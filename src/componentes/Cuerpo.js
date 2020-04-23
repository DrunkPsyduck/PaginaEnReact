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
              es mi historia. Si de verdad quieres conocerla, sigue leyendo.{" "}
              <br />
              Prodría contarte mi vida desde que nací pero prefiero ahorrarte el
              tostón. Por ello contare mi andanza por la ESO y cursos
              posteriores. En la ESO nunca fui un estudiante modelo, por no
              serlo no fui ni estudiante promedio. Más bien era el estudiante
              vago que solo aprobaba las asignaturas más sencillas. No estudiaba
              y me pasaba las tardes viendo la televisión o jugando en un equipo
              de baloncesto. repeti varios cursos. Para mi el instituto era como
              un castigo, no me sentia cómodo y no sentía que contase. De hecho,
              en esa parte de mi vida, era bastante tímido y el constante
              rechazo por parte de ciertos profesores me hizo aún más
              introvertido. La ESO fue pasando sin pena ni gloria. En 4º decidí
              continuar estudiando un grado medio, del que tampoc estudiaba. Así
              me fue...
              <br />
              Algunos dirían que no aprendí, incluso me llegarón a decir que
              esto no era lo mío y que buscase otra cosa... Creo que se
              equivocaba y si algún día lee esto, que sepa que si lo conseguí y
              no gracias a el.
              <br />
              Esta es parte de mi historia, pero no me arrepiento de ello,
              gracias a ello aprendí bastantes cosas, tarde pero las aprendí.
              Gracias a esas lecciones pasadas hoy soy mejor. Gracias a esas
              lecciones he aprendido diversas cosas incluyendo mejoras a nivel
              personal y educativo/profesional. Entre ellas:
              <hr />
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
