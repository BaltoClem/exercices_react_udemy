import React, {Component} from "react";
import Users from "./Singers";

class Display extends Component {



    render() {
        return(
            <>
                <h1>Musiciens</h1>
                <Users name="Lindsey Stirling" age="36"/>
                <Users name="Pierre Bouvier" age="44"/>
                <Users name="Mr. Kitty" age="31"/>
                <Users name="Sofiane Pamart" age="33"/>
            </>
        )
    }
}

export default Display;