import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-8 bg-cyan-900 text-white'>
      <h2 className='text-xl font-bold '> Digital Shiksha </h2>
      <div className='flex gap-8'>
        <Link to="/" className="text-lg font-bold"> Home </Link>
        <Link to="/courses" className="text-lg font-bold"> Courses </Link>
        <Link to="/about" className="text-lg font-bold"> About </Link>
        <Link to="/contact" className="text-lg font-bold"> Contact </Link>
        <Link to="/product" className="text-lg font-bold"> Product </Link>
      </div>
    </div>
  )
}

export default Navbar
