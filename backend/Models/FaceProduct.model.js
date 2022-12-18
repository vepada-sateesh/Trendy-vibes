const mongoose = require("mongoose");

const faceproductSchema = mongoose.Schema({
  stars: String,
  imageUrl: { type: String, required: true },
  brand: String,
  name: { type: String, required: true },
  numReviews: Number,
  category: String,
  Price: Number,
  type: String,
});

const FaceProductModel = mongoose.model("faceproduct", faceproductSchema);

module.exports = { FaceProductModel };
