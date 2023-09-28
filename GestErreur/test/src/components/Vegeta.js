import React, { Component } from "react";
import handleClicks from "./handleClicks";
import vegeta from '../vegeta.png';

class Vegeta extends Component {

    render() {

        const {backGround, clickHandler} = this.props;

        return(
            <div className={`col-4 ${backGround}`}>
                <img onClick={clickHandler} src={vegeta} alt="vegeta"/><br/>
            </div>
        )
    }
}

export default handleClicks(Vegeta);