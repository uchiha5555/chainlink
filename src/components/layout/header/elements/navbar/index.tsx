import React from 'react'
import { NavItem, NavbarContainer } from './style'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItem>Developers</NavItem>
      <NavItem>Products</NavItem>
      <NavItem>Use Cases</NavItem>
      <NavItem>Ecosystem</NavItem>
      <NavItem>Community</NavItem>
      <NavItem>Resources</NavItem>
      <NavItem>Economics</NavItem>
    </NavbarContainer>
  )
}

export default Navbar