const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  stars: String,
  imageUrl: { type: String, required: true },
  brand: String,
  name: { type: String, required: true },
  numReviews: Number,
  category: String,
  Price: Number,
  type: String,
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };

//  "imageURL": "https://www.sephora.com/productimages/sku/s2116028-main-zoom.jpg?imwidth=270&imwidth=164",
//     "brand": "Charlotte Tilbury",
//     "productName": "Hollywood Flawless Filter",
//     "stars": 4.5,
//     "reviews": 1700,
//     "price": 15,
//     "category": "makeup",
//     "type": "face"
