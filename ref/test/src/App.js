// Les concepts de ReactJS - Suite / 004 Les Refs 04:12
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
        this.refComponent.current.addFocus();
    }
    render(){
  return (
    <div className="App">
      <MyRef ref={this.refComponent} />

        <button onClick={this.handleClick}>Valider</button>
    </div>
  );
    }
}

export default App;
