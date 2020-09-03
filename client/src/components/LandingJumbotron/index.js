import React from "react";
import { Jumbotron, Container } from "reactstrap";
import styled from "styled-components";
import dogimage from "../Images/whitedogonblue.jpg";



const jumboText = "#82464b";
const JumboStyle = styled.article`

.lead-jumbo {
  background-image: url(${dogimage}) !important;
  color: ${jumboText};
  border: 1px solid;
  margin-top: 10px;
}

`  


function LandingJumbotron({children}) {


  return (
    
      <JumboStyle >
        <Jumbotron className="lead-jumbo">
          <Container >
            {children}
            {/* <h1 className="display-3">Pets</h1>
            <p className="lead">Enter your pet's information below!</p> */}
          </Container>
        </Jumbotron>
      </JumboStyle>
  
  );
};

export default LandingJumbotron;
