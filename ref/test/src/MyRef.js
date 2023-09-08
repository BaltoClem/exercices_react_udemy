import React from "react";

const MyRef = React.forwardRef((props, ref) => {

    console.log(props);
    console.log(ref);
    // update = event => {
    //     this.setState({
    //         value: event.target.value
    //     })
    // }

    // componentDidMount() {
    //     this.myInput.current.focus();
    // }
    /*addFocus = () => {
        this.myInput.current.focus();
    }*/

    // componentDidUpdate(prevProps, prevState) {
    //
    //     this.myTitle.current.style.color ='red';
    // }

    /* handleClick = () => {
         console.log(this.myInput.current.value)
     }*/
    return(
        <>
            {/*<h1 ref={this.myTitle}>Valeur: {this.state.value}</h1>*/}
            {/*<input ref={this.myInput} type="text" value={this.state.value} onChange={this.update}/>*/}
            <input ref={ref} type="text"/>
        </>
    )
})
export default  MyRef;