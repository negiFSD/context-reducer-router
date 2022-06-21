import React from 'react'
import { Link } from "react-router-dom";
import { CartState } from './Context/Context';



function Header() {

  const {state:{cart}} = CartState()
  return (
    <div className='header'>
            <Link to='/'>Home</Link>
            <input type={'search'} placeholder= {"type to search"}></input>
            
            <span> <Link to='cart'>cart</Link> {(cart.length)}</span>
    </div>
  )
}

export default Header