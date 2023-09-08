// Les concepts de ReactJS - Suite / 006 Les Composants d'Ordre Supérieur
import './App.css';
import MyRef from "./MyRef";
import React, {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props)

        this.refComponent = React.createRef();

    }
    handleClick = () => {
        /*console.log(this.refComponent.current)*/
        this.refComponent.current.focus();
    }
    render(){
  return (
    <div className="App">
      <MyRef name='Toto' ref={this.refComponent} />

        <button onClick={this.handleClick}>Valider</button>
    </div>
  );
    }
}

export default App;
