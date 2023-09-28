// Les Concepts de React Suite - 007 La gestion d'erreurs dans React 20:45
import React, { Component } from "react";
import Vegeta from './components/Vegeta';
import Goku from "./components/Goku";
import Frieza from "./components/Frieza";
import ErrorBoundary from "./components/ErrorBoundary";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bg: ''
        }
    }

    render() {
        return (
            <div className="container text-center">
                <h1>Cliquez sur les gentils</h1>
                <div className="row">

                    <ErrorBoundary>
                        <Vegeta />
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <Goku />
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <Frieza />
                    </ErrorBoundary>

                </div>
            </div>
        );
    }
}

export default App;
