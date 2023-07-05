import React from 'react';
import {useState} from 'react';

function Component2(){
    const [state,setstate] = useState("Hi");

    const change = ()=>{
        setstate("how are you")
    }
    return (
        <div>
            <h1>{state}</h1>
           <button onClick={change}>update</button>
        </div>
    )
}

export default Component2;