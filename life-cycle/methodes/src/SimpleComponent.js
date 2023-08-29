import { Component } from "react";

class SimpleComp extends Component {
    render() {
        console.log('%c render() du composant enfant Simple!', 'color: blue;');

        return(
            <>
                <p>
                    <span className="blue"> Simple Component : {this.props.name} </span>
                </p>
            </>
        )
    }
}

export default SimpleComp