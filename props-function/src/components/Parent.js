import React, {Component} from "react";
import Enfant from "./Enfant";

class Parent extends Component {

    state = {
        messageParent: null,
        messageEnfant: null
    }

    ordreParent = () =>{
        this.setState({
                messageParent: 'Va ranger ta chambre !'
            })
    }
    reponseEnfant = () =>{
        this.setState({
            messageEnfant: 'Non !'
        })
    }
    render() {
        return(
            <div>
                <h1>Maman</h1>
                <button onClick={this.ordreParent}>Ordre de la mère</button>
                <p>{
                    this.state.messageParent
                }</p>
                <hr/>

                <Enfant name='Tom' leState={this.state} reponseEnfant={this.reponseEnfant}/>

            </div>
        )
    }
}

export default Parent;