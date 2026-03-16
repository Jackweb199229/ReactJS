import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import NotFoundPage from './Pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import Navbar2 from './Component/Navbar2'


function App() {

  return (
    <div className='h-screen text-white bg-black'>
        <Navbar />
        <Navbar2/>
        
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/contact' element={ <Contact/> } />
          <Route path='/product' element={ <Product/> }>
            <Route path='men' element={ <Men/> } />
            <Route path='women' element={ <Women/> } />
            <Route path='kids' element={ <Kids/> } />
          </Route>

          <Route path='/courses' element={<Courses/>} />
          {/* Dynamic Routing  */}
          <Route path='/courses/:courseId' element={<CourseDetails/>} />

          <Route path='*' element={ <NotFoundPage/> } />
        </Routes>

        <Footer/>
    </div>
  )
}

export default App
