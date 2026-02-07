import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [num, setNum] = useState(1);
    const [num2, setNum2] = useState(1);

    useEffect (function(){
        console.log("Use Effect is running....");
        
    }, [num])

  return (
    <div>
      <h1> num =  {num} </h1>
      <h1> num2 = {num2} </h1>

      <button onClick={()=>{
        setNum(num+1);
      }}> 
      num  
      </button>
      <br /> <br />
      <button onClick={()=>{
        setNum2(num2 - 1);
      }}> 
      num 2 
      </button>
    </div>
  )
}

export default UseEffect
