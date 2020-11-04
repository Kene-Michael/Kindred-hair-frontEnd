import React, {useState, useEffect } from "react";

import { FaBars } from "react-icons/fa";
import { animateScroll as scroll} from 'react-scroll';
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
  NavSign,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 70) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }

    };
    useEffect (() => {
        window.addEventListener('scroll', changeNav)

    }, [])
    const toggleHome = () => {
        scroll.scrollToTop();
    }




  return (
    <>
      <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick = {toggleHome}>KindredHair</NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks to="how it works" smooth={true} duration = {500} spy = {true}
              exact='true' offset={-70}
              
              >HOW IT WORKS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="our story" smooth={true} duration = {500} spy = {true}
              exact='true' offset={-70} 
              >OUR STORY</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="my journal" smooth={true} duration = {500} spy = {true}
              exact='true' offset={-70}
              >MY JOURNAL</NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu2>
            <NavBtn>
              <NavBtnLink to="/discover your match">
                DISCOVER YOUR MATCH
              </NavBtnLink>
            </NavBtn>

            <NavSign>
              <NavLinks to="/signin">SIGN IN</NavLinks>
            </NavSign>
            <div className="border"></div>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          </NavMenu2>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

// lade you need to use linkrouter to style you sign in
