import React from "react";

const Car = ({name, color, year}) => {
    // const colorInfo = color ? (<p>{color}</p>) : (<p>N/A</p>);
    const colorInfo = color ? (`${color}`) : ('N/A');
    // const yearInfo = year ? (<p>{year}</p>) : (<p>N/A</p>)
    const yearInfo = year ? (`${year}`) : ('N/A')

    if(name){
        return (
            <tr>
                <td>{name}</td>
                <td>{yearInfo}</td>
                <td>{colorInfo}</td>
            </tr>
        )
    } else {
         return null;
        //(<div style={{
        //         backgroundColor: 'pink',
        //         width: '400px',
        //         padding: '10px',
        //         margin: '5px auto'
        //     }}>
        //         <p>Pas de data !</p>
        //     </div>
        // )
    }
}

export default Car;