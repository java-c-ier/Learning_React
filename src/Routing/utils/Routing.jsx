import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
  )
}

export default Routing