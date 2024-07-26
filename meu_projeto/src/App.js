import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Gabriel";
  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s";
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <img src={url} alt="Imagem React" />
      <HelloWorld />
    </div>
  );
}

export default App;
