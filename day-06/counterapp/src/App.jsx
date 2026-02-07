import {  useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] =  useState(0);

  function decreaseHandler(){
    setCount(count - 1);
  }
  function increaseHandler(){
    setCount(count + 1);
  }
  function reset(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-10 justify-center items-center bg-[#344151] ">

      <div className="text-white text-2xl"> Increament && Decreament </div>
      
      <div className="flex gap-12 text-4xl text-bold bg-white justify-center py-3 rounded-sm">

        <button onClick={decreaseHandler} className="border-r-1 w-20 text-5xl text-center  "> - </button>

        <h3 className="text-center"> {count} </h3>

        <button onClick={increaseHandler} className="border-l-1 w-20 text-4xl text-center"> + </button>

      </div>
      <button onClick={reset} className="bg-white p-2 text-center w-30 text-2xl rounded-sm">Reset </button>
    </div>
  );
}

export default App;
