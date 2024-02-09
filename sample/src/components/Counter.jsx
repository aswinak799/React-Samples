import React from 'react';
import { useState, useEffect } from 'react'



function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Mounting...");
        return ()=>{
            console.log("Unmounting....")
        };
    },[count]);
    return (<>
        <br />
        <button onClick={() => {
            setCount(count + 1)
        }}>Counter</button>
        <h2>It is Hello component : {count}</h2>
    </>);
};


export default Counter;
