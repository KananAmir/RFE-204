import "./App.css";
import Greeting from "./components/Greeting";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import Timer from "./components/Clock";

function App() {
  return (
    <>
      <Greeting name={"Jhon"} age={24} />
      <Greeting name={"Jane"} age={23} />

      <Toggle />

      <Counter />

      <Timer />
    </>
  );
}

export default App;
