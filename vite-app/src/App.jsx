
import { useEffect, useState } from 'react'
import './App.css'
import Controll from './Component/Controll/Controll'
import UnControll from './Component/Controll/UnControll'
import Counter from './Component/counter'
import ListComponent from './Component/List'
import UsrStateComp from './Component/UseState'
import Validation from './Validation/Validation'
import HOC from './Component/HOC/HOC'
import { Link, Route, Routes, useNavigate } from 'react-router'

let HOCValidate = HOC(Validation);
let HOCControll = HOC(Controll)

function App() {

  const navigate = useNavigate();

  const handleAbout = () =>{
    navigate("/about")
  }
  const handleContact = () =>{
    navigate("/contact")
  }
  const handleBlog = () =>{
    navigate("/blog")
  }

  const handleCounter = () =>{

    let name = "Welcome This Page...."
    navigate (`/counter/${name}`)

    // navigate("/counter/khushi_gondaliya");
  }


  // let [isLoading, setIsLoading] = useState(true);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIsLoading(!isLoading)
  //   },1000)
  // },[])
  
  return (
    <>
        {/* <UsrStateComp /> */}
        {/* <Counter/> */}
        {/* <ListComponent/> */}
        {/* <Controll/> */}
        {/* <HOCControll isLoading={isLoading} /> */}
        {/* <UnControll/> */}
        {/* <Validation/> */}
        {/* <HOCValidate isLoading={isLoading} user="khushi gondaliya" /> */}

        {/* <button onClick={handleAbout}>About</button>   &nbsp;&nbsp; */}
        {/* <button onClick={handleContact}>Contact</button>   &nbsp;&nbsp; */}
        <button onClick={handleCounter}>Contact</button>   &nbsp;&nbsp;
        {/* <button onClick={handleBlog}>Blog</button>  <br></br><br></br> */}

        <Link to={"/"}>Home</Link> &nbsp;&nbsp;
        <Link to={"/about"}>About</Link> &nbsp;&nbsp;
        <Link to={"/contact"}>Contact</Link>

        <Routes>
          <Route path="/" element={ <Counter/> }/>
          <Route path="/about" element={<h1>About Page</h1>}/>

          <Route path='/counter/:name' element={<Counter/>} />

          <Route path="/contect" element={<h1>Contact Page</h1>}/>
          <Route path="/*" element={<h1>404 not found page</h1>}/>
        </Routes>
    </>
  )
}

export default App
