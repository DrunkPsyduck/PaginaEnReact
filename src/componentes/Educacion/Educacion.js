import React, { Component } from 'react'

export default class Educacion extends Component{
    render(){
        var section = {
            backgroundColor: "#232b2b",
            color: "white",
            padding: "1%",
          };
      
          const texto = {
            padding: "0% 9% 4% 8%",
            fontWeight: "400",
          };

          const h2 = {
            color: "#248fed",
          }
          

          const h4 = {
            adding: "0% 9% 4% 8%",
            fontWeight: "400",
            textDecoration: 'underline',
            color: "#cc6600",
          }
          const imp = {
            adding: "0% 9% 4% 8%",
            fontWeight: "400",
            color: "#e834eb",
          }
        return(
            
            <div id="Educacion" style={section}>
                <h1 style={texto}> Educación</h1>
                <p>Empezaré contando primero la educación formal, puesto que gran parte del trabajo de un desarrollador es aprender por sus propio medios.</p>
                <div>
                    <h2 style={h2}>Educacion Formal</h2>
                    <div>
                        <h4 style={h4}>Master desarrollo FullStack + Multicloud + Multiplataforma</h4>
                        <h5><span>Impartido por:</span><p style={imp}> Tajamar FP+Professional Education</p></h5>
                        <h6>En este máster aprendí los Frameworks Web ReactJS y Angular, a usar el lenguaje C# y su framework web .NET CORE para crear aplicaciones web y APIs con Swagger<br/>
                        También a crear y utiilizar servicios en los servicios en la nube con Azure y Amazon Web Services. Además de todo lo anterior, aprendí a crear aplicaciones multiplataforma para
                        dispositivos Android e iOS con Xamarin.
                        </h6>
                        <p>Duración del curso: Octubre 2020 - Junio 2021</p>  
                    </div>

                    <div>
                        <h4 style={h4}>FP Superior Desarrollo de Aplicaciones Web</h4>
                        <h5><span>Impartido por:</span> <p style={imp}>IES Palomeras-Vallecas</p></h5>
                        <h6>A este grado ya accedí con conocimientos en BBDD realacionales (mysql) y con conocimientos en HTML, CSS y Java. Es por eso por lo que en el primer año de este grado
                            aprendí más algoritmía con Java que su sintaxis. El segundo curso estuvo centrado en el desarrollo de aplicaciones web con PHP, Laravel y Java2EE, aunque estos lenguajes no los he utilizazo mucho.
                            Además aprendí JavaScript y su biblioteca jQuery.
                        </h6>
                        <p>Duración del curso: Septiembre 2018 - Junio 2020</p>  
                    </div>
                    <h2 style={h2}>Estudios adicionales</h2>
                    <p>En el mundo del desarrollo, es muy común aprender otros lenguajes por el hecho de aprender a utilizarlo o expandir más los conocimientos sobre un lenguaje.
                        En mi caso, aprendí por mi cuenta las siguientes tecnologías:</p>
                    <ul style={{listStyleType: "none"}}>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>Java, antes de entrar a la FP</li>
                    </ul>                  
                </div>
            </div>
            
        );
    }
}