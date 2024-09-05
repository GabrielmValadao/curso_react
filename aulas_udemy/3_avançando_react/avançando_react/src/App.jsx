import './App.css'

import City from './assets/city.jpg'

function App() {

  return (
    <div>
      <h1>Seção 3 - Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </div>
  )
}

export default App
