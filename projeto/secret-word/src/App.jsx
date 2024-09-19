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

const guessesQty = 3

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // pega uma categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // pega uma palavra aleatoria da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return {category, word}

  }, [words])

  // start 
  const startGame = useCallback(() => {

    // limpa todas as letras
    clearLetterStates()

    // paga a categoria e palavra
    const { category, word } = pickWordAndCategory()

    // cria array de letras separadas
    let wordLetters = word.split('')

    // retira maisculo da primeira letra
    wordLetters = wordLetters.map((l) => l.toLowerCase())


    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  
  }, [pickWordAndCategory])

  // processa a letra do input
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    // checagem se a letra ja foi utilizada
    if(guessedLetters.includes(normalizedLetter) || 
    wrongLetters.includes(normalizedLetter)
  ) {
    return
  } 
    // envia letra ou remove da palavra
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

    // verifica se as chances terminaram
    useEffect(() => {
      if(guesses <= 0) {
        // reseta os states
        clearLetterStates()

        setGameStage(stages[2].name)
      }
    }, [guesses])

    // verifica se o usuario acertou
    useEffect(() => {

      const uniqueLetters = [...new Set(letters)]
      
      // condição de vitoria
      if(guessedLetters.length === uniqueLetters.length) {
        // adiciona pontuação
        setScore((actualScore) => actualScore += 100)

        //  restar jogo com uma nova palavra
        startGame()
      }

    }, [guessedLetters, letters, startGame])

  // reinicia o jogo
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  )
}

export default App
