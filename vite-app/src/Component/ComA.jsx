const CompA = ({name , handleClick})=>{

    return(
        <button onClick={()=>handleClick('khushi gondaliya')}>{name}</button>
    )

}
export default CompA;