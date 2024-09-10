import { useState } from 'react'

// style
import './App.css'

// img
import City from './assets/city.jpg'

// components
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {

  const [userName] = useState("José")

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
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name="Gabriel" />
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="Chevrolet" km={100} color="Vermelho"/>
    </div>
  )
}

export default App
