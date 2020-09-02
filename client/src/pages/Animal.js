import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Animal() {
  // Setting our component's initial state
  const [animal, setAnimal] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all animals and store them with setAnimals
  useEffect(() => {
    loadAnimal()
  }, [])

  // Loads all animals and sets them to animals
  function loadAnimal() {
    API.getAnimal()
      .then(res => 
        setAnimal(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a animal from the database with a given id, then reloads animals from the db
  function deleteAnimal(id) {
    API.deleteAnimal(id)
      .then(res => loadAnimal())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveAnimal method to save the animal data
  // Then reload animals from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.type && formObject.DOB && formObject.notes) {
      API.saveAnimal({
        name: formObject.name,
        type: formObject.type,
        DOB: formObject.DOB,
        notes: formObject.notes
      })
        .then(res => loadAnimal())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Please Enter Your Pets Information</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="type"
                placeholder="Type (required)"
              />
              <Input
                onChange={handleInputChange}
                name="DOB"
                placeholder="DOB (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="notes"
                placeholder="Notes regarding your pet:"
              />
              <FormBtn
                disabled={!(formObject.name && formObject.type && formObject.DOB && formObject.notes)}
                onClick= {() => handleFormSubmit}
              >
                Submit Information
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>List of Saved Pets</h1>
            </Jumbotron>
            {animal.length ? (
              <List>
                {animal.map(animal => (
                  <ListItem key={animal._id}>
                    <Link to={"/animal/" + animal._id}>
                      <strong>
                        {animal.name} is a {animal.type}, their DOB is {animal.DOB}. These are the notes: {animal.notes}.
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteAnimal(animal._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Animal;
