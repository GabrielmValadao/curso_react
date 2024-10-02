// import { useContext } from "react"

// import context
// import { CounterContext } from "../context/CounterContext"

// altera contador
import ChangeCounter from "../components/ChangeCounter"

// refatorando com hook 
import {useCounterContext} from "../hooks/useCounterContext"

const Home = () => {
  // const {counter} = useContext(CounterContext)

  // refatorando com hook
    const {counter} = useCounterContext()
  return (
    <div>
      <h2>Home</h2>
      <p>valor do contador: {counter}</p>
      {/* alterando valor do contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Home