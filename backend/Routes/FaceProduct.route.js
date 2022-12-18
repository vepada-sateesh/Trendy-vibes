const express = require("express");
const { FaceProductModel } = require("../Models/FaceProduct.model");
const faceproductRouter = express.Router();

//Get all product
faceproductRouter.get("/", async (req, res) => {
  const product = await FaceProductModel.find();
  res.send(product);
});

//Add new product
faceproductRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const new_product = new FaceProductModel(payload);
    await new_product.save();
    res.send({ msg: "Product created successfully" });
  } catch (err) {
    res.send(400).json({ msg: "Something went wrong" });
  }
});

//Update product
faceproductRouter.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await FaceProductModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete product
faceproductRouter.delete("/delete/:id", async (req, res) => {
  const productID = req.params.id;
  try {
    await FaceProductModel.findByIdAndDelete({ _id: productID });
    res.send({ msg: "Product deleted successfully" });
  } catch (err) {
    res.send(400).send({ msg: "Something Went Wrong" });
  }
});

module.exports = { faceproductRouter };
