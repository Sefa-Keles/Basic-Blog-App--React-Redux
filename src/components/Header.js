import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>BLOG APP</h1>
        <NavLink to="/" >HOME | </NavLink>
        <NavLink to="/blogs" >BLOG | </NavLink>
        <NavLink to="/create" >CREATE | </NavLink>
        <NavLink to="/contact" >CONTACT</NavLink>
    </header>
  )
}

export default Header