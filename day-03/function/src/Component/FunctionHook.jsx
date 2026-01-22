import { useState } from "react";

const FunctionHook = () => {
  const [num, setNum] = useState(1);
  const [user, setUser] = useState("none");
  const [arr, setArr] = useState([10, 20, 30]);

  function changeValue() {
    setNum(num + 1);
    setUser("abc@12");
    setArr([20, 40, 50]);
  }

  return (
    <div>
      <h1>
        Value of num is {num} <br />
        userName is {user} <br />
        Array is {arr.join(", ")}
      </h1>
      <button onClick={changeValue}>Click me</button>
    </div>
  );
};

export default FunctionHook;
