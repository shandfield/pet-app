import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText,
} from "reactstrap";

import styled from "styled-components";
import LogoutButton from '../LogOut/logoutbutton';

const navColor = "rgb(49, 107, 132)";
const navTextColor = "#d2d6ce";
// const tealBorder = `2px solid ${teal}`;
const NavWrapper = styled.article`
  .navbar {
    background-color: ${navColor} !important;
    border: black;
    border-bottom: 2px solid rgb(118, 118, 118);
  }

  .petapp {
    font-family: "Coming Soon", cursive !important;
    font-size: 40px;
    text-transform: none;
  }

  .woof {
    font-family: "Coming Soon", cursive !important;
    font-size: 20px;
  }

  .navbar a,
  span {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    color: ${navTextColor} !important;
  }



`;

const PetNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavWrapper>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="petapp" href="/">
          PetArray
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="./UserPets">Your Pets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./Animal">Add Your Pet</NavLink>
            </NavItem>

            <NavItem>
              <NavLink target="_blank" href="https://github.com/reactstrap/reactstrap">Calendar</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
             <LogoutButton />
           
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className="woof">Made with WOOF &#9825;</NavbarText>
        </Collapse>
      </Navbar>
    </NavWrapper>
  );
};

export default PetNav;
