import React, { Component } from 'react';

class ChildComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {

        }

        console.log(`Je suis dans le constructor() CHILD`)
    }

    componentDidMount() {
        console.log(`Je suis dans le componentDidMount() CHILD`)
    }

    render() {

        console.log(`Je suis dans le render() CHILD`)
        return(
            <>
                { console.log(`Mise à jour du DOM dans CHILD`)}
                <p>Hello World !</p>
            </>
        )
    }
}

export default ChildComponent