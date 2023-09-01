import React from "react";

//Rappel : lorsque l'on utilise une fonction, il faut rappeler certains éléments, tels que props, dans les paramètres de cette fonction
function FunctionComp(props) {

    console.log('%c render() du function component enfant !', 'color: purple;');

    return(
        <>
            <p>
                <span className="purple"> FunctionComponent : </span>
                {props.name}
            </p>
        </>
    )
}

export default React.memo(FunctionComp);