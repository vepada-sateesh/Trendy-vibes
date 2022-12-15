const mongoose = require("mongoose");

const mencasualSchema = mongoose.Schema({
  cutoffPrice: { type: String, required: false },
  price: { type: String, required: false },
  discount: { type: String, required: true },
  lazyimgsrc: { type: String, required: true },
  lazyimgsrc2: { type: String, required: false },
  imgsrc: { type: String, required: true },
  nwchide: { type: String, required: false },
  nwchide2: { type: String, required: false },
  nwchide3: { type: String, required: true },
  nwchide4: { type: String, required: true },
  nwchide5: { type: String, required: false },
  nwproductviewhref: { type: String, required: false },
  productpromotions: { type: String, required: false },
  producttagstext: { type: String, required: false },
});

const Mencasual = mongoose.model("mencausal", mencasualSchema);

module.exports = {Mencasual};
