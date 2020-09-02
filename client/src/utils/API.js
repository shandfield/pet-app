import axios from "axios";

export default {
  // Gets all animals
  getAnimals: function() {
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
    return axios.post("/api/animal/", animalData);
  },
  //Updating a animals information to the database
  updateAnimal: function(animalData){
    return axios.post("/api/animal/:id", animalData)
  }
};
