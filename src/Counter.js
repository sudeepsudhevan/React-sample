import React,{useState,useEffect} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(()=>{
       
        console.log("Component Mounted");
        console.log("count1: "+count);
        console.log("count2: "+count2);
        
    },[count,count2]) // if we pass empty array then it will run only once when component is mounted

    
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button> 
            <h1>Hello this is component: {count}</h1>

            <button onClick={()=>setCount2(count2+1)}>Increment</button> 
            <h1>Hello this is component: {count2}</h1>
        </div>
    )
}

export default Counter;