
import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  return (
      <div className='App'>
        {/* CSS global */}
        <h1>React com CSS</h1>

        {/* CSS de component */}
        <MyComponent />
        <p>Este paragrafo é do App.js</p>

        {/* CSS inline */}
        <p style={{color: 'white', padding: '25px', borderTop: '2px solid black'}}>Este elemento foi estilisado de forma inline</p>

      </div>
  )
}

export default App
