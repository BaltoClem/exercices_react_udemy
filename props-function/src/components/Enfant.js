import React from "react";

const Enfant = props => {

    console.log(props.leState);
    const btnReponse = props.leState.messageParent !== null ? (<button onClick={props.reponseEnfant}>Réponse</button>) : (<button disabled>Réponse</button>);

    return(
        <div>
            <h2>{props.name}</h2>
            {btnReponse}
            <p>{props.leState.messageEnfant}</p>
            <hr/>
        </div>
    )
}

export default Enfant;