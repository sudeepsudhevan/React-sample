

/**
 * The function creates a basic counter app with a count variable initialized to 0 and two buttons for
 * incrementing and decrementing the count.
 * @returns A React functional component named `App` is being returned. It contains a `div` element
 * with class name `App`, an `h1` element with text "Counter App", an `h2` element with text "Counter:
 * 0", and two `button` elements with text "Increment" and "Decrement" respectively.
 */

import {useState} from 'react';
import Counter from './Counter';

function App() {
  const [count,setCount]=useState(0); // [state,setState


  const addcount=()=>{
    setCount(count+1);
    console.log(count);
  }
  const subcount=()=>{
    setCount(count-1);
    console.log(count);
  }
  return (
    <div className="App">
      
      
      <button onClick={addcount}>Increment</button>
      <button onClick={subcount}>Decrement</button>
      <Counter count={count}/> 
    </div>
  
    
  );
}
export default App;


