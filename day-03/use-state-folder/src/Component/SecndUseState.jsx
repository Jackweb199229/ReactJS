import React, { useState } from 'react'
// Batch Update

const SecndUseState = () => {
    const [num, setNum] = useState(10)
    function btnclicked(){
        setNum(prev => (prev + 1)) 
        setNum(prev => (prev + 1)) 
        setNum(prev => (prev + 1)) 
    }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked} > Click </button>
    </div>
  )
}

export default SecndUseState
