import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {

    constructor(props) {
        super(props);

        this.popUpContainer = document.createElement('div');

        document.body.appendChild(this.popUpContainer);

    }

    componentWillUnmount() {
        document.body.removeChild(this.popUpContainer);
    }

    render() {
        return ReactDOM.createPortal(
            // Disposer la fonction onClick dans la première div permet à l'utilisateur de fermer la modal de différentes manières en plus du clic sur le bouton "fermer"
            <div className="modal" onClick={this.props.close}>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid animi consequuntur dicta, dignissimos dolore doloremque earum eligendi et fugit ipsum minima mollitia odit repellat repellendus similique voluptates? Deleniti, quaerat?</p>
                    <button>Fermer</button>
                </div>
            </div>,
            this.popUpContainer
        );
    }
}

export default Modal;