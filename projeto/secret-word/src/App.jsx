// Css
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react'

// Importação de dados
import { wordsList } from './data/words'

// componentes
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name:'start'},
  {id: 2, name:'game'},
  {id: 3, name:'end'},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    // pega uma categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // pega uma palavra aleatoria da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return {category, word}

  }

  // start 
  const startGame = () => {
    const { category, word } = pickWordAndCategory()

    // cria array de letras separadas
    let wordLetters = word.split('')
    console.log(wordLetters)

    // retira maisculo da primeira letra
    wordLetters = wordLetters.map((l) => l.toLowerCase())


    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)

  }

  // processa a letra do input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // reinicia o jogo
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  )
}

export default App
