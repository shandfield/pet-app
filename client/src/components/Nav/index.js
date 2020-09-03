import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import styled from "styled-components";
import LogoutButton from '../LogOut/logoutbutton';

const navColor = "rgb(49, 107, 132)";
const navTextColor = "#d2d6ce"
// const tealBorder = `2px solid ${teal}`;
const NavWrapper = styled.article`
  
  .navbar {
    background-color: ${navColor} !important;
    border: black;
    
  }
 .navbar a, span {
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  color: ${navTextColor} !important;
}`


const PetNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavWrapper>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Pet App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink href="./UserPets">Your Pets</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink target="_blank" href="https://github.com/reactstrap/reactstrap">Calendar</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
             <LogoutButton />
           
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Made with WOOF<span><i class="fas fa-heart"></i></span></NavbarText>
        </Collapse>
      </Navbar>
    </NavWrapper>
  );
}

export default PetNav;
