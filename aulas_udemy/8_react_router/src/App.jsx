import './App.css'

// configura react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// importa components
import Navbar from './components/Navbar'

// importa as pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'


function App() {

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* Rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
        </Routes>
        <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App
