import { Logo } from './components/Logo'
import { NavItem } from './components/NavItem'

import { NavUI, NavWrapper, NavItemWrapper } from './Nav.css'

export const Nav = () => {
  return (
    <NavUI>
      <NavWrapper>
        <Logo />
        <NavItemWrapper>
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/projects">Projects</NavItem>
        </NavItemWrapper>
      </NavWrapper>
    </NavUI>
  )
}