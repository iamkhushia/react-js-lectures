import { useRef } from "react";
import { useState } from "react";

const ListComponent = () =>{

    const [list,setlist]=useState(['Home' , 'About' , 'Contact' , 'Dtails']);
    const liRef1 = useRef(null);
    const liRef2 = useRef(null);

    const handleMouse = () =>{
        console.log("Li Ref: ", liRef1.current.innerHTML);
        console.log("Li Ref: ", liRef2);
        liRef1.current.style.color = "Blue"
        liRef2.current.style.color = "Red"
    }

    return(
        <div>
            <h2  onMouseOver={handleMouse}>Static List</h2>
            <li ref={liRef1}>{list[0]}</li>
            <li ref={liRef2}>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{list[3]}</li>

            {/* <h2>Dynamic List</h2>
            {
                list.map((item,index)=>{
                    return(<li>{item}</li>)
                })
            } */}

        </div>
        
    )
}
export default ListComponent;