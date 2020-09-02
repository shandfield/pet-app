import React from "react";
import { Jumbotron, Container } from "reactstrap";
import styled from "styled-components";

// function Jumbotron({ children }) {
//   return (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
// }


const jumboBack = "#f2dfc1";
const jumboText = "#82464b";
const JumboStyle = styled.article`

.jumbotron {
  background-color: ${jumboBack} !important;
  color: ${jumboText};
  border: 1px solid;
  margin-top: 10px;
}

`  


function mainJumbotron({children}) {


  return (
    
      <JumboStyle>
        <Jumbotron >
          <Container >
            {children}
            {/* <h1 className="display-3">Pets</h1>
            <p className="lead">Enter your pet's information below!</p> */}
          </Container>
        </Jumbotron>
      </JumboStyle>
  
  );
};

export default mainJumbotron;
