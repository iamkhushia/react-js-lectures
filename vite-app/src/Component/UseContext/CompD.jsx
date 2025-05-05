import { useContext } from "react";
import { myContext } from "../../App";

const CompD = () =>{

    const obj = useContext(myContext)
    return(
        <>
           <h2>Comp D</h2>
           <p>{obj.name}</p>
        </>
    )
}
export default CompD;