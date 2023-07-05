import React from "react";

function Prop1(props){


    // functional js
    return(
        <div>

            <p>{props.name}</p>
            <h1>{props.age}</h1>
            <h2>{props.children}</h2>

        </div>
    )
}

export default Prop1;