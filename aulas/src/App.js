import "./App.css";
import ListLinguagens from "./components/ListLinguagens";
function App() {
  const meusItens = ["React", "Vue", "Angular"];
  return (
    <div className="App">
      <h1>Rendenização de listas: </h1>
      <ListLinguagens itens={meusItens} />
      <ListLinguagens itens={""} />
    </div>
  );
}

export default App;
