import React from "react";
import { createPortal } from "react-dom";

function MyComponent() {
    return(
        <>
            {createPortal(<p>Je suis dans root</p>
                ,
                document.getElementById('second-root'))}
        </>

    )
}

export default MyComponent;