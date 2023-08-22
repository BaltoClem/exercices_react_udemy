import React, {Component} from "react";

class Users extends Component {

    // state={
    //
    // }
    render() {
        // console.log(this.props)
        const {name, age} = this.props;

        return (
            <>
                <p>Chanteur : {name}</p>
                <p>Age : {age + " ans"}</p>
            </>
        )
    }
}

export default Users;