import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)

  return (
    <div>
        <h2>Este item será exibido?</h2>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora o x é falso</p>}
    </div>
  )
}

export default ConditionalRender