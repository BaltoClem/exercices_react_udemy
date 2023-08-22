import React, {Component} from "react";

class Result extends Component{
    state = {
        name: "Mario",
        winner: true
    }

    render(){

        // Une condition est à paramétrer dans le render() de préférence

        if (this.state.winner){
            return(
                <>
                    <h1>Félicitations {this.state.name}</h1>
                </>
            )
        }else{

        }


    }
}

export default Result;