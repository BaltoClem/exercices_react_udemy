// Les Concepts de React Suite - 008 Les Props de Rendu
import React, { Component } from "react";
import Vegeta from "./Vegeta";
import Goku from "./Goku";
import AddHits from "./AddHits";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div className="container text-center">
          <h1>Goku VS Vegeta</h1>
          <hr/>

          <div className="row">
              {/* saiyan && "Vegeta" est une condition qui attend saiyan = true pour afficher "Vegeta"  */}
               {/* <Vegeta render={(saiyan) => saiyan && "Vegeta"}/> */}

               <AddHits 
                render={
                  (hits, addOne, saiyan) => (
                    // Attention : condition =>
                    saiyan.vegeta && <Vegeta hits={hits} addOne={addOne} name="Vegeta"/>
                  )
                }
               />
               <AddHits 
                render={
                  (hits, addOne, saiyan) => (
                    // Attention : condition =>
                    saiyan.goku && <Goku hits={hits} addOne={addOne} name="Goku"/>
                  )
                }
               />
          </div>
        </div>
    );
  }
}

export default App;
