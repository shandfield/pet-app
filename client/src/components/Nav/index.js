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

const navColor = "rgb(49, 107, 132)";
const navTextColor = "#d2d6ce"
// const tealBorder = `2px solid ${teal}`;
const NavWrapper = styled.article`
  
  .navbar {
    background-color: ${navColor} !important;
    
  }
 .navbar a, span {
   
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
              <NavLink href="../pages/UserPets">Your Pets</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Calendar</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </NavWrapper>
  );
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Animal List
//       </a>
//     </nav>
//   );
}

export default PetNav;
