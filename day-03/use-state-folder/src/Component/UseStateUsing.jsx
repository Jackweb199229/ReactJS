import React, { useState } from "react";

const UseStateUsing = () => {
  const [num, setNum] = useState({ user: "Saharukh Khan ", age: 50 });
  

  const changeNum = () => {
    let newNum = { ...num };
    newNum.user = "Salman Khan";
    newNum.age = 45;
    setNum(newNum);
    console.log(newNum);
  };
  return (
    <div>
      <h1>Your Name is {num.user}</h1>
      <h1> Value of Age is {num.age} </h1>
      <button onClick={changeNum}> Change Data </button>
    </div>
  );
};

export default UseStateUsing;
