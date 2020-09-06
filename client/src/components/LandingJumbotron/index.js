import React from "react";
import { Jumbotron, Container } from "reactstrap";
import styled from "styled-components";
import dogimage from "../Images/allanimals.jpg";

const jumboText = "#82464b";
const JumboStyle = styled.article`

.lead-jumbo {
  background-image: url(${dogimage}) !important;
  color: ${jumboText};
  border: 1px solid;
  height: 700px;
  margin-top: 10px;
  text-align: center;
}

.lead-jumbo h1 {
    font-size: 60px;
    color: #82464b;
}

.lead-jumbo h3 {
  color: #82464b;
}

`  

function LandingJumbotron({children}) {

  return (
    
      <JumboStyle >
        <Jumbotron className="lead-jumbo">
          <Container >
            {children}
          </Container>
        </Jumbotron>
      </JumboStyle>
  
  );
};

export default LandingJumbotron;
