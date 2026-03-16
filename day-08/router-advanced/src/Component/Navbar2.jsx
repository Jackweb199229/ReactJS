import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

    let navigate =  useNavigate()


  return (
    <div className='py-1.5 px-5 bg-cyan-700'>
      <button onClick={()=>{
        navigate('/')
      }} 
      className='bg-amber-600 px-5 py-2 m-2 rounded active:scale-95 cursor-pointer font-semibold'> 
      Return Home Page
      </button>

      <button onClick={()=>{
        navigate(-1)
      }} 
      className='bg-emerald-800 px-5 py-2 m-2 rounded active:scale-95 cursor-pointer font-semibold'> 
      Back
      </button>

      <button onClick={()=>{
        navigate(+1)
      }} 
      className='bg-emerald-800 px-5 py-2 m-2 rounded active:scale-95 cursor-pointer font-semibold'> 
      Next
      </button>
    </div>
  )
}

export default Navbar2
