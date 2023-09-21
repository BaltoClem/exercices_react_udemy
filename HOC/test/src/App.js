// Les Concepts de React Suite - 006 Les Composants d'Ordre Supérieur - HOC 25:50
import React, { Component } from "react";
import Vegeta from "./Vegeta";
import Goku from "./Goku";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vegeta : 100,
            goku : 100
        }
    }

    reduceLife = (param, param2) => {
        if(param === "Vegeta"){
            this.setState({
                goku : this.state.goku - param2
            })
        }else{
            this.setState({
                vegeta : this.state.vegeta - param2
            })
        }
    }

  render() {
    return (
        <div className="container text-center">
          <h1>Goku VS Vegeta</h1>
          <hr/>

          <div className="row">

              <Vegeta name="Vegeta" PV={this.state.vegeta} reduceHandler={this.reduceLife} />
              <Goku name="Goku" PV={this.state.goku} reduceHandler={this.reduceLife} />

          </div>
        </div>
    );
  }
}

export default App;
