import React, { useEffect } from 'react';
import  {useState} from 'react';

function Component3(){
    
    const [count,setcount] = useState[1]
    const increaseHandler=()=>{
            setcount((count)=> count+ 1)
    }
    useEffect(()=>{
console.log("only first time it's render")
    })
    return(
        <div>
            <h4>count:{count}</h4>
            <button onClick={increaseHandler}>increment</button>
        </div>
    )
    }


export default Component3