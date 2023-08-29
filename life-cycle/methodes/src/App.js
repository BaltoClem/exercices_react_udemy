// Les Concepts de React JS - Suite / 002 React Memo  06:50

import {Component} from "react";
import ParentComponent from './ParentComponent'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <ParentComponent />
        </div>
    );
  }
}

export default App;
