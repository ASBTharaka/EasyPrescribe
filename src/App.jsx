import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Docters from './pages/Docters'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappoinment from './pages/Myappoinment'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Docters/>} />
        <Route path='/doctors/:speciality' element={<Docters/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/myprofile' element={<Myprofile/>} />
        <Route path='/my-appinments' element={<Myappoinment/>} />
        <Route path='/appoinment/:docId' element={<Appoinment/>} />
      
     
      </Routes>
         <Footer/>
    </div>
  )
}

export default App