import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

// style
import './Product.css'


const Product = () => {
    // Rota dinamica
    const {id} = useParams()

    // carrega dado individual
    const url = 'http://localhost:3000/products/' + id
    const {data: product, loading, error} = useFetch(url)

  return (
    <>
    <p>ID do produto: {id}</p>
    {error && <p>Ocorreu um erro</p>}
    {loading && <p>Carregando dados...</p>}
    {product && (
        <div>
            <h2>{product.name}</h2>
            <h2>R$: {product.price}</h2>
            {/* Nested route */}
            <Link className="details" to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
    )}
    </>
    
  )
}

export default Product