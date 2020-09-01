const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  dateOfBirth: {type: Date, required: true, trim: true},
  Notes: { type: String, required: true },
 });

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
