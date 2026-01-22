import "./App.css";
import FunctionHook from "./Component/FunctionHook.jsx";
import CountApp from  "./Component/CountApp.jsx";

function App() {
  return (
    <div className="app">
      <FunctionHook />
      <hr /> <br />
      <CountApp/>
    </div>
  );
}

export default App;
