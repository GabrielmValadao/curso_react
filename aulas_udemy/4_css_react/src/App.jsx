
import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  const n = 15
  const [name] = useState("Gabriel")
  
  const redTitle = true

  return (
      <div className='App'>
        {/* CSS global */}
        <h1>React com CSS</h1>

        {/* CSS de component */}
        <MyComponent />
        <p>Este paragrafo é do App.js</p>

        {/* CSS inline */}
        <p style={{color: 'white', padding: '25px', borderTop: '2px solid black'}}>Este elemento foi estilisado de forma inline</p>

        {/* CSS inline dinamico */}
        <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinamico</h2>
        <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinamico</h2>
        <h2 style={name === 'Gabriel' ? ({color: "purple", backgroundColor: 'green'}) : ({color: "pink"})}>CSS dinamico</h2>

        {/* Classe dinamica */}
        <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>

      </div>
  )
}

export default App
