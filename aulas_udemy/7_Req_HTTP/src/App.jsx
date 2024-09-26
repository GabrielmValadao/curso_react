import './App.css'

import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {
  // salvando dados
  const [products, setProducts] = useState([])
  // resgatando dados
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)

      const data = await response.json()

      setProducts(data)
    }

    fetchData()
  }, [])      

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
    </div>
  );
}

export default App
