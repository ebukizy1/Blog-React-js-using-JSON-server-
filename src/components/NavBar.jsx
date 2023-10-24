import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

  return (
    <nav className='navbar'>
      <h1> The Emax Blog </h1>  
         <div className='links'>
            <Link to="/"> Home</Link>
            <Link to="/create"> New Blog</Link>
         
         </div>
    </nav>
  )
}
