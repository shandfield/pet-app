const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Animals collection and inserts the animal below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactanimallist"
);

const animalSeed = [
  {
    name: "Chippy",
    type: "Dog",
    DOB:"09.06.2017",
    Notes: "Hyper little guy! Will be 3 in a week!!"
  },
  {
    name: "Bulma",
    type: "Dog",
    DOB:"04.20.2019",
    Notes: "Hyper active, fence jumper!"
  },
  {
    name: "Brennan",
    type: "Dog",
    DOB:"04.01.2019",
    Notes: "Very athletic and mouthy!"
  },
  {
    name: "Malone",
    type: "Cat",
    DOB:"05.03.2017",
    Notes: "Very active and likes to snuggle with his furry companion!"
  },
  {
    name: "Carlisle",
    type: "Honey-Badger",
    DOB:"07.07.2015",
    Notes: "He don't give no cares!"
  }
];

db.Animal
  .remove({})
  .then(() => db.Animal.collection.insertMany(animalSeed))
  .then(data => {
    console.log(data.result.n + " animal data added!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
