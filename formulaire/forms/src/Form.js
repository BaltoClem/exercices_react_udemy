import React, {Component} from "react";
/*import MyHead from "./myHeaderOne";*/

// import Parrot from "./Parrot";
/*import './myCSS.css';*/

// L'"import styles" permet de designer un élément spécifique présent dans ce même fichier mais n'appliquera pas les effets sur les élements enfant de ce derneir
/*import styles from './myCSS.module.css'*/

import styled from 'styled-components';

const Title = styled.h1`
    color: red;
    font-size: 80px;
`

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 12px 13px;
    font-size: 15px;
`

class Form extends Component {

    /*state = {
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
    }*/

    render() {

       /* const myBool = this.props.bool ? 'blue' : 'red';*/

        return(
            <>
            {/*<Parrot color={this.state.color} height="400"/>*/}
                <Title /*className={styles.green}*/>Commentaire 1</Title>

                {/*<MyHead/>
                <p className={`${myBool} bigFont`}"red">Paragraphe test</p>*/}

                {/*<form action="" onSubmit={this.handleSubmitForm}>
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

                </form>*/}
                <Button>Valider</Button>
            </>
        )
    }
}

export default Form;