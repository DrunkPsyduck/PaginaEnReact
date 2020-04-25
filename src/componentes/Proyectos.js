import React from "react";

class Proyectos extends React.Component {
  render() {
    let contenedor = "contenedor";

    const texto = {
      padding: "0% 8% 2% 8%",
      fontWeight: "500",
      color: "#cc6600",
    };
    const tabla = {
      color: "orange",
      margin: " 2% 10%",
      padding: "15%",
    };
    return (
      //TODO Enlazar con la api de GitHub y sacar en una tabla los repositorios
      <section className={contenedor} id="Proyectos">
        <h1
          style={{
            color: "white",
          }}
        >
          {" "}
          Mis proyectos{" "}
        </h1>{" "}
        <p style={texto}>
          Después de cada proyecto "terminado", me gusta observar que he
          aprendido mientras lo realizaba. En este caso, aprender cosas de React
          JS. Aunque no solo me paro para comprender que he hecho, si que me
          gusta fijarme en la consonancia de la página con aquello que quiero
          transmitir. Con cada proyecto que realizo no solo aprendo más cosas,
          si no que mejoro como programador. Se que algunos proyectos que tengo
          contienen errores o su apariencia no es la correcta. Pero con cada
          nuevo proyecto, con cada línea de código me convierto en mejor
          profesional.
          <br />A continución estarán listados los proyectos de los que me
          siento más orgulloso, sea por la dificultad inicial (por ejemplo, el
          ajedrez, que fue desarrollado en un mes y con pocos concimientos
          previos) o por lo que significo hacerlos. Esta practica la llevo
          realizando desde que aprendí HTML y CSS con 17 años (Un poco tarde
          según a quien le preguntes) gracias a un profesor que decidio
          enseñarlo antes de que se viese en el siguiente curso. Al principio
          creia que esas páginas estáticas, estaban bien creadas o que tenian
          consonancia. Nada más lejos de la realidad. Ahora las veo y si bien he
          mejorado, no se puede olvidar que gracias a esas páginas sin sentido
          ahora, las organizo y desarrollo de otra manera.
        </p>{" "}
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col"> Proyecto </th>
              <th scope="col"> Descripción </th>{" "}
              <th scope="col"> Repositorio </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> iVehicle </th>
              <td>
                {" "}
                Aplicación web que permite a añadir vehiculos y revisiones de
                los vehiculos. Este proyecto se correspondería con el módulo de
                Proyecto de Fin de Grado o Trabajo de Fin de Grado. Como desees
                llamarlo.{" "}
              </td>
              <td>
                {" "}
                <a
                  href="https://github.com/DrunkPsyduck/iVehicle"
                  target="blank"
                >
                  iVehicle
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              <th scope="row"> Ajedrez </th>
              <td>
                {" "}
                Proyecto de un ajedrez sencillo escrito en java. Contiene
                algunos erroreres. Aplicacion para el módulo de programación {" "}
              </td>
              <td>
                {" "}
                <a
                  href="https://github.com/DrunkPsyduck/ajedrez"
                  target="blank"
                >
                  Ajedrez
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              <th scope="row"> Calculadora </th>{" "}
              <td>
                {" "}
                Calculadora sencilla escrita en JavaScript Vanilla. Tiene las
                funcionalidades básicas. Al resolver una operación se puede
                copiar el resultado{" "}
              </td>
              <td>
                {" "}
                <a
                  href="https://github.com/DrunkPsyduck/Calculator"
                  target="blank"
                >
                  Calculator
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              <th scope="row"> Esta página </th>
              <td>
                {" "}
                Esta página es un proyecto en si mismo. Mi intencion para con
                ella es, aprender cosas básicas de React y a su vez tener un
                portfolio, aunque sea básico.{" "}
              </td>
              <td>
                {" "}
                <a
                  href="https://github.com/DrunkPsyduck/PaginaEnReact"
                  target="blank"
                >
                  Repositorio
                </a>{" "}
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>
        
      </section>
    );
  }
}

export default Proyectos;
