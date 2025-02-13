import { useState } from "react";


const UsrStateComp = ()  =>{

    const userInfo = {
        name : "khushi gondaliya",
        email : "khushi@gmail.com"
    }
    const [user , setUser] = useState(userInfo);

    const handleClick = () =>{
        setUser({
            ...user,
            name : "radhe radhe",
            email : "radhe123@gmail.com"
        })
    }
    console.log(user);
    

     return(
        <div>
            <h2>Hello,Welcome...</h2>
            <h3>Name :{user.name}</h3>
            <h3>Email :{user.email}</h3>
            <button onClick={handleClick}>Change Name</button>
        </div>
     )
}

export default UsrStateComp;