// style
import './App.css'

// import router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// import pages
import Home from './pages/Home/Home'
import About from './pages/About/About' 

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  
  )
}

export default App
