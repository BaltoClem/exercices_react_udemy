// 04 - Le cycle de Vie d'un Composant React avec les Classes / 003 La Phase de Mise à Jour
import {Component} from "react";
import LifeCycle from "./LifeCycle";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <LifeCycle name="Tom2"></LifeCycle>
        </div>
    );
  }

}

export default App;
