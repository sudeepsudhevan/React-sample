import React,{useState,useEffect} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
       
        console.log("Component Mounted");
        console.log("Component Updated"+count);
        return ()=>{
            console.log('clean up'+count)
        } 
    },[count])

    
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button> 
            <h1>Hello this is component: {count}</h1>
        </div>
    )
}

export default Counter;