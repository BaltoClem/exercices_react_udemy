import React, { Component } from "react";
import handleClicks from "./handleClicks";
import goku from '../goku.png';

class Goku extends Component {
    
    render() {

        const {backGround, clickHandler} = this.props;

        return(
            <div className={`col-4 ${backGround}`}>
                <img onClick={clickHandler} src={goku} alt="vegeta"/><br/>
            </div>
        )
    }
}

export default handleClicks(Goku);