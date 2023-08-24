import React, {Component} from "react";
import Parrot from "./Parrot";

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ["", "red", "blue", "green", "black", "pink"],
        comment: ''
    }
    handlePseudo = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleColor = event => {
        this.setState({
            color: event.target.value
        })
    }

    handleComments = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmitForm = event => {
        // Le "event.PreventDefault()" va permettre à la page de ne pas rafraîchir et ainsi constater la capture des informations dans le console.log
        event.preventDefault();
        console.log(`Username: ${this.state.username} Couleur: ${this.state.color} Commentaire: ${this.state.comment}`)
    }

    render() {
        return(
            <>
            <Parrot color={this.state.color} height="400"/>
                <h1>Commentaire</h1>
                <form action="" onSubmit={this.handleSubmitForm}>
                    <div>
                        <label htmlFor="">Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo}/>
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                        <div>
                            <label>Commentaire</label>
                            <textarea name="" id="" cols="30" rows="10" value={this.state.comment} onChange={this.handleComments}></textarea>
                        </div>
                    </div>

                    <button>Valider</button>

                </form>
            </>
        )
    }
}

export default Form;