import React, { useState } from 'react'
import './CountApp.css';

const CountApp = () => {
  const [num, setNum] =  useState(1);

  function valueInc(){
    setNum(num-1)
  }
  function valueDec(){
    setNum(num+1)
  }
  function jumpfive(){
    setNum(num+5)
  }

  return (
   <div className='parentdiv'>
    <div className='parent'>
      <h1 className='btn' onClick={valueInc}> - </h1>
      <h2 className='head'> {num} </h2>
      <h1 className='btn' onClick={valueDec}> + </h1>
      <button className='btn1' onClick={jumpfive} > jump by 5 </button>
    </div>
    </div>
  )
}

export default CountApp
