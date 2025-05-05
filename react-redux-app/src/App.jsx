
  import { Route, Routes } from 'react-router'
import './App.css'
import Counter from './Components/Counter'
import AddRecipe from './Components/AddRecipe'
import EditRecipe from './Components/EditRecipe'
import Home from './Components/Home'
import Header from './Components/Header'

function App() {

  return (
    <>
        <Header />
      <Routes>
        {/* <Route path='/' element={<Counter/>} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddRecipe />} />
        {/* <Route path='/edit/:id' element={<EditRecipe />} /> */}
      </Routes>
    </>
  )
}

export default App
