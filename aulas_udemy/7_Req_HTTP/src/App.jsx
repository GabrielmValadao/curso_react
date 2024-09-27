import './App.css'

import { useState, useEffect } from 'react';

// 4 - custom hook 
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  // 1- salvando dados
  const [products, setProducts] = useState([])

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url)


  // 2- adiciona produtos
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1- resgatando dados CODIGO FEITO DENTRO DO useFetch
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url)

  //     const data = await response.json()

  //     setProducts(data)
  //   }

  //   fetchData()
  // }, [])
  
  // 2- adiciona produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    // 2- requisição
    // const response = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": 'application/json'
    //   },
    //   body: JSON.stringify(product) 
    // })

    // // 3- carregamento dinâmico 
    // const addedProduct = await response.json()
    
    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // 5 - refatorando post 
    httpConfig(product, 'POST')

    setName('')
    setPrice('')
  }

  // desafio 
  const handleRemove = (id) => {
    httpConfig(id, 'DELETE')
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados</p>}
      {error && <p>{error}</p>}
      {!error && 
      // 1- retorna os itens para a pagina
      <ul>
         {/* 4 - custom hook, altera o products para items  */}
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
            {/* desafio */}
            <button onClick={() => handleRemove(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>}
      

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
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App
