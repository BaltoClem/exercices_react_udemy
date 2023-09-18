import React, { Component } from 'react';
import countHits from "./countHits";
import vegeta from './vegeta.png';
class Vegeta extends Component {
    render() {

        const {name, addOneHit, hocState} = this.props;

        return(
            <div className="col">

                <img src={vegeta} alt="vegeta" /><br/>
                <button onClick={addOneHit} className="btn btn-success m-3">{name} attaque !</button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        )
    }
}

export default countHits(Vegeta);