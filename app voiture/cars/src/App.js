import './App.css';
import Mycars from "./components/Mycars";
import React, { Component } from "react";

class App extends Component{

    // state = {
    //     titre: 'Mon catalogue de voitures'
    // }

    // changeTitle = (e) => {
    //     console.log(e);
    //     this.setState({
    //         titre: 'Le nouveau titre'
    //     })
    // }
    // changeViaParam = (titre) =>{
    //     this.setState({
    //         titre: titre
    //     })
    // }
    //
    // changeViaBind = (param) => {
    //     this.setState({
    //         titre: param
    //     })
    // }
    //
    // changeViaInput = (e) => {
    //     this.setState({
    //         titre: e.target.value
    //         })
    // }

  render() {
    return (
        <div className="App">
          <Mycars />{/*title={this.state.titre}*/}
            {/*<button onClick={this.changeTitle}>Changer le nom</button>*/}

            {/*/!*Dans les accolades de la fonction onClick, nous devons rajouter "() =>" avant l'instruction afin que cette dernière ne s'exécute pas de suite*!/*/}
            {/*<button onClick={() => this.changeViaParam('Le nouveau titre avec paramètre')}>Cliquer pour changer nom avec paramètre</button>*/}
            {/*<button onClick={this.changeViaBind.bind(this, 'Titre via Bind')}>Cliquer pour changer nom avec bind</button>*/}
            {/*<input type="text" onChange={this.changeViaInput} value={this.state.titre}/>*/}
        </div>
    );
  }
}

export default App;
