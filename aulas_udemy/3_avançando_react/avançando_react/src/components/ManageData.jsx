import { useState } from "react"

const ManageData = () => {
  
  let someData = 10

//   sintaxe padrão do useState
  const [number, setNumber] = useState(15);
    
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(30)}>Mudar state</button>
        </div>
    </div>
  )
}

export default ManageData