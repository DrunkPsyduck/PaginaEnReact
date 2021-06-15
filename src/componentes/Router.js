import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cuerpo from "./Cuerpo";
import Inicio from "./Inicio";
import Proyectos from "./Proyectos";

export default class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path='/Cuerpo' component={Cuerpo} exact />
            <Route path='/Inicio' component={Inicio} exact />
            <Route path='/Proyectos' component={Proyectos} exact/>
          </Switch>
        </BrowserRouter>
      );
    }
  }