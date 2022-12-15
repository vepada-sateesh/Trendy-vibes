const mongoose = require("mongoose");


const mentshirtSchema = mongoose.Schema({
  brand: { type: String, required: true },
  description: { type: String, required: true },
  cutoffPrice: { type: String, required: false },
  price: { type: String, required: false },
  discount: { type: String, required: false },
  frontimgsrc: { type: String, required: true },
  hidenimgsrc: { type: String, required: true },
  lazyimgsrc2: { type: String, required: false },
  imgsrc: { type: String, required: true },
  nwchide: { type: String, required: false },
  nwchide2: { type: String, required: false },
  nwchide5: { type: String, required: false },
  nwproductviewhref: { type: String, required: false },
  productpromotions: { type: String, required: false },
  producttagstext: { type: String, required: false },
});


const Mentshirt = mongoose.model("mentshirt",mentshirtSchema);

module.exports = {Mentshirt};