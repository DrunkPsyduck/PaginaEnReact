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
         Después de cada proyecto "terminado", me gusta observar que he aprendido mientras lo realizaba. En este caso, aprender cosas de React JS. AUqneu no solo me paro para comprender que he hecho, si que me gusta fijarme
          en la consonancia de la página con aquello que quiero transmitir. Con cada proyecto que realizo no solo aprendo más cosas, si no que mejoro como programador. Se que algunos proyectos que tengo contienen errores o su 
          apariencia no es la correcta. Pero con cada nuevo proyecto, con cada línea de código me convierto en mejor profesional.<br/>
          A continución estarán listados los proyectos de los que me siento más orgulloso, sea por la dificultad inicial (por ejemplo, el ajedrez, que fue desarrollado en un mes y con pocos concimientos previos) o por 
        </p>{" "}
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col"> Proyecto </th>
              <th scope="col"> Descripcion </th>{" "}
              <th scope="col"> Repositorio </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> iVehicle </th>
              <td>
                {" "}
                Aplicación web que permite a añadir vehiculos y revisiones de
                los vehiculos. TFG.{" "}
              </td>
              <td>
                {" "}
                <a href="https://github.com/DrunkPsyduck/iVehicle">iVehicle</a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              <th scope="row"> Ajedrez </th>
              <td>
                {" "}
                Proyecto de un ajedrez sencillo escrito en java. Contiene
                algunos erroreres. Aplicacion para el módulo de programación{" "}
              </td>
              <td>
                {" "}
                <a href="https://github.com/DrunkPsyduck/ajedrez">Ajedrez</a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              <th scope="row"> Calculadora </th> <td> Calculadora sencilla escrita en JavaScript Vanilla. Tiene las funcionalidades básicas. AL resolver una operacoón se puede copiar el resultado </td>
              <td> <a href="https://github.com/DrunkPsyduck/Calculator">Calculator</a> </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>
      </section>
    );
  }
}

export default Proyectos;
