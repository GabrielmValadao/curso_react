import "./App.css";

function App() {
  const name = "Gabriel";
  const url =
    "https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png";
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <img src={url} alt="Imagem React" />
    </div>
  );
}

export default App;
