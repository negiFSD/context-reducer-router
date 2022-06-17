import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Component/Cart'
import Header from './Component/Header'
import Home from './Component/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App