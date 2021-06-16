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
         He trabajado en distintos proyectos distintos con diferentes tecnologías y con diferentes equipos.
         A Continuación, expongo aquellos en los que más he aprendido.
        </p>{" "}
        <table className={tabla}class="table table-dark">
          <thead>
            <tr>
              <th scope="col"> Proyecto </th>
              <th scope="col"> Descripción </th>{" "}
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> 
                <a
                  href="https://github.com/DrunkPsyduck/ZeiterFree"
                  target="blank"
                  >
                  ZeiterFree
                  </a>
                </th>
              <td>
                
               Este Proyecto fue una colaboración con PYV Tecnologías. desarrollado en equipo con Node.JS como servidor y con MongoDB como base de datos.
              </td>
              <td>
                
                
              </td>{" "}
            </tr>{" "}
            <tr>
              <th scope="row">
              <a
                  href="https://github.com/DrunkPsyduck/MoneyGo"
                  target="blank"
                >
                  MoneyGo
                </a>{" "}
              </th>
              <td>
               Proyecto personal para el máster FullStack, Multicloud y Multiplataforma impartido Tajamar.
               Este proyecto utiliza .NET para el servidor y para la API que utiliza este proyecto.
               Luego se migró para utilizar servicios en la nube, primero con Azure y luego con AWS.
              </td>
             
            </tr>{" "}
            <tr>
              <th scope="row">
              <a
                  href="https://github.com/DrunkPsyduck/MoneyGo"
                  target="blank"
                >
                  App MoneyGo
                </a>{" "}
              </th>
              <td>
              Este proyecto es la continuación del anterior para móviles. Haciendo uso de Xamarin (ahora MAUI), se esta migrando el proyecto anterior a plataformas móviles.
              La finalidad de esto, no es más que seguir aprendido Xamarin y satisfacer mi curiosidad.
              </td>
             
            </tr>{" "}

          </tbody>{" "}
        </table>

      </section>
    );
  }
}

export default Proyectos;
