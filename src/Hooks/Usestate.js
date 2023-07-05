import React from 'react';
import {useState} from 'react';

function Usestate(){
    const [state,setstate] = useState("Hi");

    const change = ()=>{
        setstate("how are you")
    }
    return (
        <div>
           <button onClick={change}>update</button>
        </div>
    )
}

export default Usestate;