import React from "react";
import PetCarousel from "../components/PetCarousel/PetCarousel";
import AddImageBtn from "../components/AddImageBtn/addimagebtn";
import { Container } from "reactstrap";

function UserPet() {
    return (
      <Container>
      <PetCarousel />
      <AddImageBtn />
      </Container>
    );
  }
  
  export default UserPet;
   