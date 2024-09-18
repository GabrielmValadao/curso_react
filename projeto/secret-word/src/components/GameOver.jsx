import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
    <button onClick={retry}>Reiniciar jogo</button>
    </div>
  )
}

export default GameOver