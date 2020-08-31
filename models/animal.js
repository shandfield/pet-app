const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  synopsis: String,
  DOB: { type: Date, default: Date.now },
  Notes: { type: String, required: true },
  synopsis: String,
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
