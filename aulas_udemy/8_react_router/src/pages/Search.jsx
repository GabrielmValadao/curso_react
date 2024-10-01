import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = "http://localhost:3000/products?" + searchParams

    const {data: items, loading, error} = useFetch(url)

    const filteredItems = items && items.filter(item => 
        item.name.toLowerCase().includes(searchParams.get("q").toLowerCase())
    )

  return (
    <div>
        <h3>
            Resultados disponiveis
        </h3>
        <ul className="products">
            {filteredItems && filteredItems.map((item) => (
                <li key={item.id}>
                    <h4>{item.name}</h4>
                    <p>R$: {item.price}</p>
                    <Link className="details" to={`/products/${item.id}`}>Detalhes</Link>          
                </li>
        ))}
      </ul>
    </div>
  )
}

export default Search