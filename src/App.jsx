import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.css'
import Auth from './Pages/Auth'
import Navbar from './Components/Navbar/Index'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Followers from './Pages/Followers'
import Following from './Pages/Following'
import Settings from './Pages/Settings'
import Layout from './Components/Layout'

function App() {


  return (
    <>


      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path="followers" element={<Followers />} />
          <Route path="following" element={<Following />} />
          <Route path="settings" element={<Settings />} />


        </Route>

      </Routes>





    </>
  )
}

export default App
