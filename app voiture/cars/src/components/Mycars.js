import React, {Component, Fragment} from "react";
import Car from "./Cars";

class Mycars extends Component{

    // noCopy = () => {
    //     alert("Il est impossible de copier ce paragraphe !");
    // }

    state = {
        voitures: [
            {name: 'Ford' , year: '2000'},
            {name: 'Mercedes', color: 'Verte', year: '2010'},
            {name: 'Peugeot', color: 'Grise', year: '2023'}
        ],
        titre: 'Mon catalogue Voitures 2'
    }

    addTenYears = () => {
        const updatedState = this.state.voitures.map((x) =>{
            return x.year -= 10;
        })

        this.setState({
            updatedState
      })
    }

    render() {

        const todayYear = new Date().getFullYear();


        return(
            <>
                <h1>{this.state.titre}</h1>
                {/*<p onCopy={this.noCopy} className='parag_home'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur debitis facere fuga, inventore laboriosam laborum odio omnis porro sunt.</p>*/}
                {/*<Car color={this.state.voitures[0].color} year={todayYear - this.state.voitures[0].year + " an(s)"}>{this.state.voitures[0].name}</Car>*/}
                {/*<Car color={this.state.voitures[1].color} year={todayYear - this.state.voitures[1].year + " an(s)"}>{this.state.voitures[1].name}</Car>*/}
                {/*<Car color={this.state.voitures[2].color} year={todayYear - this.state.voitures[2].year + " an(s)"}>{this.state.voitures[2].name}</Car>*/}

                <table className="carsTable">
                    <tr>
                        <th>Marque</th>
                        <th>Age</th>
                        <th>Couleur</th>
                    </tr>
                {
                    // Dans les paramètres de map, nous devons rajouter index et rajouter key={index} dans le component (Car) pour indiquer chaque élément,
                    // si un élément est retiré manuellement du tableau "voitures, alors React comprendra et effectuera la modification nécessaire

                    this.state.voitures.map((voiture, index) => {
                        const orthoAge = todayYear - voiture.year <= 1 ? " an" : " ans";
                        return(
                            <Fragment key={index}>
                                <Car name={voiture.name} color={voiture.color} year={todayYear - voiture.year + orthoAge } />
                            </Fragment>
                        )
                    })
                }

                {/*On ne rajoute pas de () après le nom de la fonction afin qu'elle ne puisse pas s'exécuter automatiquement*/}
                <button onClick={this.addTenYears}>Ajouter 10 ans</button>

                </table>

            </>
        )
    }
}

export default Mycars;