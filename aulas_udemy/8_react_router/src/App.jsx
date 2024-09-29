import './App.css'

// configura react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// importa as pages
import Home from './pages/Home'
import About from './pages/About'

// importa components
import Navbar from './pages/components/Navbar'

function App() {

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App
