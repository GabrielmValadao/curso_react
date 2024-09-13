
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
      <div>
        <h1>Formulários</h1>
        <MyForm user={{name: 'Gabriel', email: 'gabriel@gmail.com', bio: 'Sou dev', role: 'admin'}}/>
      </div>
      
    
  )
}

export default App
