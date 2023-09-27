import React, { Component } from "react";
import frieza from '../frieza.png';

class Frieza extends Component {
    state = {
        bg: ''
    }

    handleClick = () => {
        this.setState({
            bg: 'bg-danger'
        })
    }
    render() {

        if(this.state.bg === "bg-danger"){
            throw new Error();
        }
        return(
            <div className={`col-4 ${this.state.bg}`}>
                <img onClick={this.handleClick} src={frieza} alt="vegeta"/><br/>
            </div>
        )
    }
}

export default Frieza;