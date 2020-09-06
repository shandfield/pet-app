import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import styled from "styled-components";

const NotFound = styled.article`
text-align: center;
 h1 {
  font-family: 'Coming Soon', cursive;
 }
 h3 {
   color: #82464b;
   font-family: "News Cycle", "Arial Narrow", sans-serif;
 }
`

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <NotFound>
          <Jumbotron>
            <h1>404 </h1>
            <h1>Page Not Found</h1>
            <h3>
              Looks like you barked up the wrong tree! Try the Navigation Bar above!
            </h3>
          </Jumbotron>
          </NotFound>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
