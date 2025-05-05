import { useContext } from "react";
import CompD from "./CompD";
import { myContext } from "../../App";

const CompC = () =>{
        const obj = useContext(myContext)
    
    return(
        <>
           <h2>Comp C :<h5> {obj.email} </h5></h2>
           <CompD/>
        </>
    )
}
export default CompC;