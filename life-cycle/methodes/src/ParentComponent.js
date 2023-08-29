import { Component } from 'react'
import SimpleComp from "./SimpleComponent";
import PureComp from "./PureComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Spider-Man'
        }
    }

    changeToBatman = () => {
        this.setState({
            name: 'Batman'
        })
    }

    render(){

        console.log('%c RENDER() DU COMPOSANT PARENT', 'color: red;')

        return(
            <>
                <p>
                    <span className="red">Parent Component : </span>
                </p>

                <SimpleComp name={this.state.name} />
                <PureComp name={this.state.name} />

                <button onClick={this.changeToBatman}>Changer en Batman</button>

            </>
        )
    }
}

export default ParentComponent