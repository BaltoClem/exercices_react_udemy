import React, {Component} from "react";
// import ChildComponent from "./ChildComponent";

class LifeCycle extends Component{

    constructor(props) {
        super(props);

        this.state = {
            name: 'Tom',
            step: 1
        }

        console.log(`Etape ${this.state.step} : Je suis dans le constructor()`)

    }

    componentDidMount() {
        console.log(`Etape ${this.state.step} : Je suis dans le componentDidMount()`)
        this.setState({
            name: this.props.name,
            step: this.state.step + 1
        })
        console.log(`Etape ${this.state.step} : setState() a changé le state dans le ComponentDidMount()`)
    }

    // Ne jamais utiliser de setState() dans cette fonction
    componentDidUpdate(prevProps, prevState) {
        console.log(`Etape ${this.state.step} : Je suis dans le componentDidUpdate()`)
        console.log(prevState);
        console.log(this.state)
    }

    render() {

        console.log(`Etape ${this.state.step} : Je suis dans le render()`)

        return(
            <>
                { console.log(`Etape ${this.state.step} : Mise à jour du DOM`)}
                <p>Chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>

                {/*<ChildComponent />*/}
            </>
        )
    }
}

export default LifeCycle;