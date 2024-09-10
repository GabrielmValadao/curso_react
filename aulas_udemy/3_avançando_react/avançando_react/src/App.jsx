import {  useState } from 'react'

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
import Fragment from './components/Fragment'
import Container from './components/Container'

function App() {

  const [userName] = useState("José")

  const cars = [
    {id: 1, brand:"BYD", color: "Cinza", newCar: true, km: 0 },
    {id: 2, brand:"Ferrari", color: "Vermelho", newCar: true, km: 0 },
    {id: 3, brand:"Porsche", color: "Laranja", newCar: false, km: 15000 }
  ]

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

      {/* Reaproveitamento de componentes */}
      <CarDetails brand="Ford" km={0} color="Cinza" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      <CarDetails brand="Tesla" km={0} color="Azul espacial" newCar={true}/>

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar} 
        />
      ))}

      {/* fragment */}
      <Fragment propFragment="teste"/>

      {/* children */}
      <Container myValue="teste">
        <p>Conteudo do container</p>
      </Container>
      <Container myValue="teste2">
        <h5>Testando o container</h5>
      </Container>
    </div>
  )
}

export default App
