// import { useContext } from "react"

// import context
// import { CounterContext } from "../context/CounterContext"

// altera contador
import ChangeCounter from "../components/ChangeCounter"

// refatorando com hook 
import {useCounterContext} from "../hooks/useCounterContext"

// context mais complexo
import {useTitleColorContext} from "../hooks/useTitleColorContext"

const Home = () => {
  // const {counter} = useContext(CounterContext)

  // refatorando com hook
    const {counter} = useCounterContext()

  // context mais complexo
  const {color} = useTitleColorContext()

  return (
    <div>
      <h2 style={{color: color}}>Home</h2>
      <p>valor do contador: {counter}</p>
      {/* alterando valor do contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Home