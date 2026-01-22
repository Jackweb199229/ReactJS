import { useState } from "react";
import "./App.css";

function App() {

  const [title, setTitle] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    console.log("Form Submitted by", {title});
    setTitle('')
  }

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
