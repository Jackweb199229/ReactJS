import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center p-3 justify-between bg-green-700 text-white'>
      <h3 className='text-xl font-bold text-blue-800'> Digital Shiksha </h3>
      <div className='flex items-center gap-5 text-xl'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
