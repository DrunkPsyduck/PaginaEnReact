import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cuerpo from "./Cuerpo";
import Inicio from "./Inicio";
import Navegacion from "./Navegacion.js";
import Proyectos from "./Proyectos";
import Footer from "./Footer.js";
import Conociemientos from './Conocimientos/Conocimientos';

export default class App extends Component {
    render() {
      return (
        <BrowserRouter>
        <Inicio />
        <Navegacion/>
          <Switch>
            <Route path='/Cuerpo' component={Cuerpo} exact />
            <Route path='/Conocimientos' component={Conociemientos} exact /> */}
            <Route path='/Proyectos' component={Proyectos} exact/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      );
    }
  }