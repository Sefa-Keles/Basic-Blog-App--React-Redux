import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>BLOG APP</h1>
        <NavLink exact to="/" activeClassName="active">HOME | </NavLink>
        <NavLink to="/blogs" activeClassName="active">BLOG | </NavLink>
        <NavLink to="/create" activeClassName="active">CREATE | </NavLink>
        <NavLink to="/contact" activeClassName="active">CONTACT</NavLink>
    </header>
  )
}

export default Header