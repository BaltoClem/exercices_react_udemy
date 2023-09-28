import React, { Component } from "react";
import handleClicks from "./handleClicks";
import frieza from '../frieza.png';

class Frieza extends Component {
    
    render() {

        const {backGround, clickHandler} = this.props;

        
        return(
            <div className={`col-4 ${backGround}`}>
                <img onClick={clickHandler} src={frieza} alt="vegeta"/><br/>
            </div>
        )
    }
}

export default handleClicks(Frieza);