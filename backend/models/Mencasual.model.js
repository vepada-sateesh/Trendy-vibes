const mongoose = require("mongoose");

const mencasualSchema = mongoose.Schema({
  identifier: String,
  productno: Number,
  description: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  discount: Number,
  frontimgsrc: { type: String, required: true },
  hidenimgsrc: String,
  cutoffPrice: Number,
  producttagstext: { type: String, required: true },
  plogosrc: String,
});

const Mencasual = mongoose.model("mencausal", mencasualSchema);

module.exports = {Mencasual};
