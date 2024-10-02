// import react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// style
import './App.css'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

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
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
     </div>
    
  )
}

export default App
