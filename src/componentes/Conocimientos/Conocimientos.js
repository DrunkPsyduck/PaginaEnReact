import React from 'react';
import az from "../../Imagenes/azure-developer-associate-600x600.png";
import aws from "../../Imagenes/AWS-Developer-Associate-2020.png";
import "./conocimientos.css";

class Conociemientos extends React.Component {
    render() {
        let contenedor = "contenedor";
  
      const texto = {

        padding: "0% 8% 2% 8%",
        fontWeight: "500",
        color: "#cc6600",
      };

      let img = {
        width: 200
      }
  
      return (
        <div id="Conocimientos">
          <section className={contenedor} >
            <article>
              <div>
              <h1  style={{color: "white",}}>
                Conocimientos
              </h1>
              <div>
                <p style={texto}>Para hacer más fácil mostrar y explicar que lenguajes y herramientas de desarrollo se utilizar, estos estarán divididos en 3 partes distintas. Fullstack, cloud y multplipataforma.</p>
                <hr/> 
                <div>
                  <h2 style={{color: "white",}}>FullStack</h2>
                  <p style={texto}>En la parte de FullStack, se utilizar Javascript y sus frameworks jQuery, React y Angular. En la parte del servidor conozco y se utilizar la plataforma .NET y NodeJS.
                    </p>
               </div>

               <div>
                  <h2 style={{color: "white",}}>Multicloud</h2>
                  <p style={texto}>
                    He trabajado con las plataformas de Azure y AWS. He desplegado aplicaciones y APIs en ambas plataformas y he hecho uso de varios de los servicioes de estas plataformas.
                    <br/>
                    Gracias a haber estado trabajando con estos proveedores y a los apuntes y conocimientos que recibí en el máster, pude obtener los certificados correspondientes a los exámenes
                     AZ-204 (Azure) y DVA-C01 (Amazon Web Services).
                     <br/>
                    <a href="https://www.credly.com/badges/f38c45ea-c9f1-44aa-ac0f-0410ca716a95/public_url" target="_blank"><img src={az} style={img} /></a>
                    <a href="https://www.credly.com/badges/ffac012f-2153-414c-a95f-a977fbebae47/public_url" target="_blank"><img src={aws} style={img}/></a>  
                    
                  </p>
                 
               </div>


               <div>
                  <h2 style={{color: "white",}}>Multiplataforma</h2>
                  <p style={texto}>En esta parte es en la que tengo menos experiencia y menos horas de desarrollo.
                      En esta parte utilizo Xamarin, en adelante MAUI, para crear aplicaciones para Android e iOS. Al ser la parte que menos he estudiado, es la parte en la que más estoy dedicando a formarme migrando aplicaciones que ya tenía creadas.
                       
                    </p>
               </div>
              </div>
            
                
            </div>
            </article>
          </section>
        </div>
      );
    }
  }

  export default Conociemientos;