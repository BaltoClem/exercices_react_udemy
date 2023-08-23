import React, {Component} from "react";

class Result extends Component{
    state = {
        name: "Mario",
        winner: true
    }
    render(){
        // Une condition est à paramétrer dans le render() de préférence
        return this.state.winner ?
            <h1>Bravo {this.state.name}</h1> :
            <h1>Game Over</h1>

        // Une autre méthode est possible pour faire les conditions tout en se focalisant sur le "true" de cette dernière :
        // On utilisera les &&
        // A décommenter si test à faire

        // return this.state.winner && <h1>Bravo {this.state.name}</h1>
    }
}

export default Result;