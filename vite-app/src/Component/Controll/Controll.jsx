import { useState } from "react";
import './Controll.css'

const Controll = () =>{

  const [fname,setFname] = useState("");  
  const [email,setEmail] = useState("");  


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Fname =>",fname);
    console.log("Email =>",email);
    
  }
    return(
        <>
          <div className="controll">
          <h2 className="data">Cntroll Component</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-data">Full Name:-</label>
            <input type="text" placeholder="enter name" className="form-input" value={fname} onChange={(e)=>{
              // console.log(e.target.value);
              setFname(e.target.value)
              
            }}
            />
            <br/>
            <br/>

            <label className="form-data">Email:-</label>
            <input type="text" placeholder="enter email"  className="form-input" value={email} onChange={(e)=>{
              // console.log(e.target.value);
              setEmail(e.target.value);
              
            }}
            />
            <br/>
            <br/>

            <button className="btn" type="submit">Submit</button>
          </form>
          </div>
        </>
    )

}
export default Controll;