const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: { type: String, required: true },
  imageURL: { type: String, required: true },
  category: String,
  brand: String,
  reviews: Number,
  Rating: Number,
  stars: String,
  type: String,
  Price: Number,
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
