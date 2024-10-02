// import react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// style
import './App.css'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

// import components
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <h1>Context API - React</h1>  
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
          </Routes>
      </BrowserRouter>
     </div>
    
  )
}

export default App
