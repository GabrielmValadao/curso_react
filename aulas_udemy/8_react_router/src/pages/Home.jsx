import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

// estilização
import './Home.css'

const Home = () => {

  const url = 'http://localhost:3000/products'

  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
      <h3>Produtos</h3>
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>R$: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home