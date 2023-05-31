

/**
 * The function creates a basic counter app with a count variable initialized to 0 and two buttons for
 * incrementing and decrementing the count.
 * @returns A React functional component named `App` is being returned. It contains a `div` element
 * with class name `App`, an `h1` element with text "Counter App", an `h2` element with text "Counter:
 * 0", and two `button` elements with text "Increment" and "Decrement" respectively.
 */


import Employee from './Employee';


function App() {
  
  
  
  let emp = [{name:'John',age:25},
  {name:'steve',age:30},
  {name:'Mike',age:28}];


  return (
    <div className="App">
      
      
      
      {
        emp.map((obj,index)=>
          (
            <Employee key={index} {...obj}/> 
          )
        )
      }
    </div>
  
    
  );
}
export default App;


