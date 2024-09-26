import './App.css'

import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {
  // 1- salvando dados
  const [products, setProducts] = useState([])

  // 2- adiciona produtos
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1- resgatando dados
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)

      const data = await response.json()

      setProducts(data)
    }

    fetchData()
  }, [])
  
  // 2- adiciona produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    // requisição
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(product) 
    })

    
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* retorna os itens para a pagina */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>

      {/* 2- adiciona produtos */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" 
            value={name} 
            name='name' 
            onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="text" 
            value={price} 
            name='price' 
            onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App
