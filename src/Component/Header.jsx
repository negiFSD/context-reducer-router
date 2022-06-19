import React from 'react'
import { Link } from "react-router-dom";function Header() {
  return (
    <div className='header'>
            <Link to='/'>Home</Link>
            <input type={'search'} placeholder= {"type to search"}></input>
            
            <span> cart</span>
    </div>
  )
}

export default Header