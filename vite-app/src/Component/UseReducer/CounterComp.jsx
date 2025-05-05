import { useReducer } from "react";
import { myReducer } from "./reducer";

const CounterComp = () =>{

    const [count, dispatch] = useReducer(myReducer, 0);


     const handleInc = () =>{
        dispatch({type: "Increment"})
     }

     const handleDec = () =>{
        dispatch({type: "Decrement"})
     }

     const handlereset = () =>{
        dispatch({type: "Reset"})
     }

    return(
        <>
          <h2>Counter : {count} </h2>
          <button onClick={handleInc}>Increment</button> &nbsp;
          <button  onClick={handleDec}>Decrement</button> &nbsp;
          <button  onClick={handlereset}>Reset</button>
        </>
    )
}
export default CounterComp;