import './App.css'

// configura react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// importa components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

// importa as pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

function App() {

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        {/* search route */}
        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* Rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* Nested route */}
          <Route path='/products/:id/info' element={<Info />}/>
          {/* Search route */}
          <Route path='/search' element={<Search />}/>
          {/* redirect */}
          <Route path='/company' element={<Navigate to='/about'/>} />
          {/* No match route */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
