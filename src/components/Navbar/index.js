import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks, 
    NavBtn,
    NavBtnLink,
    NavMenu2,
    NavSign
} 
from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>KindredHair</NavLogo> 
                  
                  <NavMenu>
                    <NavItem>
                        <NavLinks to='how it works'>HOW IT WORKS</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='our story'>OUR STORY</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='my journal'>MY JOURNAL</NavLinks>
                    </NavItem>
                  </NavMenu>
                  <NavMenu2>

                  <NavBtn>
                        <NavBtnLink to='/discover your match'>
                            DISCOVER YOUR MATCH
                        </NavBtnLink>
                    </NavBtn>
                    
                    <NavSign>
                        <NavLinks to='/signin'>SIGN IN</NavLinks>
                    
                        </NavSign>

                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  </NavMenu2>
                    
              </NavbarContainer>  
            </Nav>
        </>
    )
}

export default Navbar

// lade you need to use linkrouter to style you sign in

