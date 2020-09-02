import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import styled from "styled-components";

function Detail(props) {
  const [animal, setAnimal] = useState({})

  // When this component mounts, grab the animal with the _id of props.match.params.id
  // e.g. localhost:3000/animals/
  const {id} = useParams()
  useEffect(() => {
    API.getAnimal(id)
      .then(res => setAnimal(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              {animal.name} is a {animal.type}, their date of birth is {animal.dateOfBirth}. 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Notes:</h1>
              <p>
                {animal.notes}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to List</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
