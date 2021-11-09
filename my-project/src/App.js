import logo from "./logo.svg";
import "./App.css";
import { Example } from "./components/FAQ"

function App() {
  return (
    <div className="container p-4">
      <TailwindCSSButton>Button Test</TailwindCSSButton>

    </div>
  );
}

function TailwindCSSButton(props) {
  return(
    <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">{props.children}</button>
  )
}

export default App;
