// import { useState } from "react";

// const Validation = () =>{

//     const [userInput, setUserInput] = useState({
//         fname: "",
//         email: "",
//         password: "",
//         mobileNo: "",
//         gender:"",
//       });

//       const [errors, setErrors] = useState({});


//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserInput({
//           ...userInput,
//           // [e.target.name]: e.target.value
//           [name]: value,
//         });
//       };

//       const validate = () => {
//         let formErrors = {}
    
//         if(userInput.fname === ""){
//             formErrors.fname = "Full Name is not Empty"
//         }else if(userInput.fname.length <3){
//             formErrors.fname = "Minimum 5 Characters Required"
//         }
//         if(userInput.email === ""){
//             formErrors.email = "Email is not Empty"
//         }
//         if(userInput.password === ""){
//             formErrors.password = "Password is not Empty"
//         }else{
    
//             let pettern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
//             if(!pettern.test(userInput.password)){
//                 formErrors.password = "Password in One Special Character, Uppercase, LowerCase, Number,special-simblol..."
//             }
//         }
    
//         setErrors(formErrors);
//         if(Object.keys(formErrors).length > 0){
//             return false
//         }else{
//             return true
//         }
//       }
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         if(validate()){
//             console.log("Submit ===>", userInput);
//         }
//       };
    

//     return(
//         <>
//             <h2>User Registration</h2>
//             <from onSubmit={handleSubmit}>
//                 <label>Full Name :-</label>
//                 <input type="text" placeholder="enter your name" name="fname" value={userInput.fname} onChange={handleChange} />
//                 {errors.fname ? <i style={{color: "Red"}}>{errors.fname}</i> : ""}
//                 <br />
//                 <br />

//                 <label>Email :-</label>
//                 <input type="email" placeholder="enter your email" name="email" value={userInput.email} onChange={handleChange} />
//                 {errors.email ? <i>{errors.email}</i> : ""}
//                 <br />
//                 <br />

//                 <label>Password:-</label>
//                 <input type="password" placeholder="enter your password" name="password" value={userInput.password} onChange={handleChange} />
//                 <br />
//                 <br />

//                 <label>Mobile No :-</label>
//                 <input type="text" placeholder="enter your number" name="mobileNo" value={userInput.mobileNo} onChange={handleChange} />
//                 {errors.password ? <i style={{color: "Red"}}>{errors.password}</i> : ""}

//                 <br />
//                 <br />
                
//                 <label>Gender :-</label>
//                 <label>
// 		        <input type="radio" name="gender" value="male" checked={userInput.gender==="male"} onChange={handleChange} />male
// 		        </label>

//                 <label>
// 		        <input type="radio" name="gender" value="female" checked={userInput.gender==="female"} onChange={handleChange}/>female
// 		        </label>
                

//                 <label>
// 		        <input type="radio" name="gender" value="other" checked={userInput.gender==="other"} onChange={handleChange}/>other
// 		        </label>

//                 <br />
//                 <br />

//             <button type="submit" value="submit">Register</button>

//             </from>
//         </>
//     )
// }
// export default Validation;





import { useState } from "react";
import './validation.css'

const Validation = ({user}) => {
  const [userInput, setUserInput] = useState({
    fname: "",
    email: "",
    password: "",
    mobileNo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      // [e.target.name]: e.target.value
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {}

    if(userInput.fname === ""){
        formErrors.fname = "Full Name is not Empty"
    }else if(userInput.fname.length <3){
        formErrors.fname = "Minimum 3 Characters Required"
    }
    if(userInput.email === ""){
        formErrors.email = "Email is not Empty"
    }
    if(userInput.password === ""){
        formErrors.password = "Password is not Empty"
    }else{

        let pettern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!pettern.test(userInput.password)){
            formErrors.password = "Password in One Special Character, Uppercase, LowerCase, Number"
        }
    }

    setErrors(formErrors);
    if(Object.keys(formErrors).length > 0){
        return false
    }else{
        return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
        console.log("Submit ===>", userInput);
    }
  };
  return (
    <>
      <div className="validation">
      <h2>{user}</h2>
      <form onSubmit={handleSubmit}>
        <lable>Full Name: </lable>
        <input
          type="text"
          name="fname"
          value={userInput.fname}
          onChange={handleChange}
        />
        {errors.fname ? <i style={{color: "Red"}}>{errors.fname}</i> : ""}
        <br />
        <br />
        <lable>Email: </lable>
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
        />
        {errors.email ? <i>{errors.email}</i> : ""}
        <br />
        <br />
        <lable>Password: </lable>
        <input
          type="password"
          name="password"
          value={userInput.password}
          onChange={handleChange}   
        />
        {errors.password ? <i style={{color: "Red"}}>{errors.password}</i> : ""}
        <br />
        <br />
        <lable>Mobile No: </lable>
        <input
          type="text"
          name="mobileNo"
          value={userInput.mobileNo}
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn" type="submit">Register</button>
      </form>
      </div>
    </>
  );
};

export default Validation;
