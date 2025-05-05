
  import { Route, Routes } from 'react-router'
import './App.css'
import Counter from './Components/Counter'
import AddRecipe from './Components/AddRecipe'
import EditRecipe from './Components/EditRecipe'
import Home from './Components/Home'
import Header from './Components/Header'
import ViewRecipe from './Components/ViewRecipe'
import Register from './Components/Register'
import Login from './Components/Login'

function App() {

  return (
    <>
        <Header />
      <Routes>
        {/* <Route path='/' element={<Counter/>} /> */}
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddRecipe />} />
        <Route path='/edit/:id' element={<EditRecipe />} />
        <Route path='/view/:id' element={<ViewRecipe />} />

      </Routes>
    </>
  )
}

export default App
