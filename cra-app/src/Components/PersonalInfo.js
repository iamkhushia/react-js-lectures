import "./PersonalInfo.css"

const PersonalInfo = ({name,course,hobby}) =>{
    let h3style = {color : "blue"}
    return (
        <div className="data">
            <h1>Hello Welcome My Page!!..</h1>
            <h2 style={{color:"green"}}>{name}</h2>
            <h3 style={h3style}>{course}</h3>
            <h3 style={{color:"yellowgreen"}}>My Address : E-301 , Alpine-green velly , valakpatiya , surat</h3>
            <h3></h3>
        </div>
    )

};
export default PersonalInfo;