import axios from "axios";

export default {
  // Gets all animals
  getAnimal: function() {
    return axios.get("/api/animal");
  },
  // Gets the animal with the given id
  getAnimal: function(id) {
    return axios.get("/api/animal/" + id);
  },
  // Deletes the animals with the given id
  deleteAnimal: function(id) {
    return axios.delete("/api/animal/" + id);
  },
  // Saves a animal to the database
  saveAnimal: function(animalData) {
    return axios.post("/api/animal", animalData);
  }
};
