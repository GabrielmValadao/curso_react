import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";

function App() {
  const name = "Rafael";
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="João" />
      <SayMyName name={name} />
    </div>
  );
}

export default App;
