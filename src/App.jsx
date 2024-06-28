import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.css'
import Auth from './Pages/Auth'
import Navbar from './Components/Navbar/Index'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>


      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />}>
          <Route index element={<Home />} />

        </Route>
      </Routes>





    </>
  )
}

export default App
