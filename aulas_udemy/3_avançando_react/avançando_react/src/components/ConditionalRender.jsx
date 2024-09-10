import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("Silvana")

  return (
    <div>
        <h2>Este item será exibido?</h2>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora o x é falso</p>}
        {/* if ternário */}
        {name === "Gabriel" ? (
            <div>
                <p>O nome é Gabriel</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        ) }
        <button onClick={() => setName("Gabriel")}>Clique aqui</button>
    </div>
  )
}

export default ConditionalRender