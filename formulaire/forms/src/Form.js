import React, {Component} from "react";
import Parrot from "./Parrot";

class Form extends Component {
    render() {
        return(
            <>
            <Parrot color="green" height="400"/>
                <h1>Commentaire</h1>
                Formulaire
            </>
        )
    }
}

export default Form;