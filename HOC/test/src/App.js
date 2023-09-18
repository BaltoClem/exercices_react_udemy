// Les Concepts de React Suite - 006 Les Composants d'Ordre Supérieur - HOC 25:50
import React, { Component } from "react";
import Vegeta from "./Vegeta";
import Goku from "./Goku";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div className="container text-center">
          <h1>Goku VS Vegeta</h1>
          <hr/>

          <div className="row">

              <Vegeta name="Vegeta" />
              <Goku name="Goku"/>

          </div>
        </div>
    );
  }
}

export default App;
