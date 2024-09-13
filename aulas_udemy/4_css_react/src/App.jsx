
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

      </div>
  )
}

export default App
