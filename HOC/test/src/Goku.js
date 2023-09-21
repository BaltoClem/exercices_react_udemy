import React, { Component } from 'react';
import countHits from "./countHits";
import goku from './goku.png';

class Goku extends Component {
    render() {
        const { name, addOneHit, hocState, PV } = this.props;
        const lifeValue = PV > 0 ? (<td>{PV}</td>) : (<td>Game Over !</td>);
        const deadCharacter = PV > 0 ? (<button onClick={addOneHit} className="btn btn-success m-3">{name} attaque !</button>) :
            (<button onClick={addOneHit} className="btn btn-danger m-3 disabled">{name} attaque !</button>);

        return (
            <div className="col">
                <img src={goku} alt="goku" /><br />
                {deadCharacter}

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Coups</th>
                        <th scope="col">PV</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{hocState.hits}</td>
                        {lifeValue}
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Goku, 20);
