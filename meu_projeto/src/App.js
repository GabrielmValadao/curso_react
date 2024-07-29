import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {
  const name = "Rafael";
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <HelloWorld />
      <SayMyName name="João" />
      <SayMyName name={name} />
      <Pessoa
        nome="Gabriel"
        idade="26"
        profissao="Programador"
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
      />
    </div>
  );
}

export default App;
