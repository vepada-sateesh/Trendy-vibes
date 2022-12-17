const express = require("express");

const { Mentshirt } = require("../models/Mentshirt.model");
const { Mencasual } = require("../models/Mencasual.model");
const { Menformal } = require("../models/Menformal.model");

const menRouter = express.Router();

// Mentshirt model requests

let tshirtBrand = [
  "U.S. Polo Assn. Denim Co.",
  "U.S. Polo Assn.",
  "Tommy Hilfiger",
  "Calvin Klein",
];

menRouter.get("/tshirt", async (req, res) => {
  let search = req.query.search || "";
  let brand = req.query.brand || tshirtBrand;
  let discount = req.query.discount || 0;
  let min = req.query.minimum || 0;
  let max = req.query.maximum || 15000;
  let sortBy = req.query.sort || 1;
  let limit = req.query.limit || 45;

  try {
    let data = await Mentshirt.find({
      $and: [
        { description: { $regex: search, $options: "i" } },
        { discount: { $gte: discount } },
        { price: { $gte: min, $lte: max } },
      ],
    })
      .where("brand")
      .in([...brand])
      .sort({ price: sortBy })
      .limit(limit);

    res.status(200).send({ total: data.length, mentshirt: data });
  } catch (err) {
    res.send({ message: "Something went wrong somewhere" });
    console.log(err);
  }
});

// Men tshirt PRODUCT ADD reques
menRouter.post("/tshirt/create", async (req, res) => {
  let product = req.body;
  let check = Object.keys(product);
  try {
    if (check > 0) {
      let newProduct = new Mentshirt(product);
      await newProduct.save();
      res.status(200).send({ response: "Product added successfully" });
    } else {
      res.status(401).send({ response: "Please pass product data" });
    }
  } catch (err) {
    res.status(500).send({ response: "Something went wrong somewhere" });
  }
});

// Men tshirt UPDATE reques
menRouter.patch("/tshirt/update/:tshirtId", async (req, res) => {
  try {
    if (req.params.tshirtId) {
      if (req.body) {
        let { tshirtId } = req.params;
        let updatedData = req.body;
        await Mentshirt.findByIdAndUpdate({ _id: tshirtId }, updatedData);
        res
          .status(200)
          .send({ response: "Product data is updated successfully" });
      } else {
        res.status(401).send({ response: "Update data is missing !!!" });
      }
    } else {
      res
        .status(401)
        .send({ message: "Product id is missing please pass product id" });
    }
  } catch (err) {
    res.status(500).send({ response: "Something went wrong somewhere" });
  }
});
// Men tshirt DELETE reques
menRouter.delete("/tshirt/delete/:tshirtId", async (req, res) => {
  try {
    if (req.params.tshirtId) {
      let { tshirtId } = req.params;
      await Mentshirt.findByIdAndDelete({ _id: tshirtId });
      res.status(200).send({ response: "Product deleted successfully" });
    } else {
      res
        .status(401)
        .send({ message: "Product id is missing please pass product id" });
    }
  } catch (err) {
    res.status(500).send({ response: "Something went wrong somewhere" });
  }
});

// Menformal model requests

let formalBrand = [
  "Tommy Hilfiger",
  "Calvin Klein",
  "Arrow",
  "Arrow Newyork",
  "Calvin Klein Jeans",
];

menRouter.get("/formal", async (req, res) => {
  let search = req.query.search || "";
  let brand = req.query.brand || formalBrand;
  let discount = req.query.discount || 0;
  let min = req.query.minimum || 0;
  let max = req.query.maximum || 15000;
  let sortBy = req.query.sort || 1;
  let limit = req.query.limit || 45;

  try {
    let data = await Menformal.find({
      $and: [
        { description: { $regex: search, $options: "i" } },
        { discount: { $gte: discount } },
        { price: { $gte: min, $lte: max } },
      ],
    })
      .where("brand")
      .in([...brand])
      .sort({ price: sortBy })
      .limit(limit);
    res.status(200).send({ total: data.length, menformal: data });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong somewhere" });
  }
});


// Men formal PRODUCT ADD reques
menRouter.post("/formal/create", async (req, res) => {
  let product = req.body;
  let check = Object.keys(product);
  try {
    if (check > 0) {
      let newProduct = new Menformal(product);
      await newProduct.save();
      res.status(200).send({ response: "Product added successfully" });
    } else {
      res.status(401).send({ response: "Please pass product data" });
    }
  } catch (err) {
    res.status(500).send({ response: "Something went wrong somewhere" });
  }
});

// Men formal UPDATE reques
menRouter.patch("/formal/update/:formalId", async (req, res) => {
  try {
    if (req.params.formalId) {
      if (req.body) {
        let { formalId } = req.params;
        let updatedData = req.body;
        await Menformal.findByIdAndUpdate({ _id: formalId }, updatedData);
        res.status(200).send({response:"Product data is updated successfully"})
      } else {
        res.status(401).send({ response: "Update data is missing !!!" });
      }
    } else {
      res
        .status(401)
        .send({ message: "Product id is missing please pass product id" });
    }
  } catch (err) {
    res.status(500).send({ response: "Something went wrong somewhere" });
  }
});
// Men formal DELETE reques
menRouter.delete("/formal/delete/:formalId", async (req, res) => {
  try {
    if (req.params.formalId) {
      let { formalId } = req.params;
      await Menformal.findByIdAndDelete({ _id: formalId });
      res.status(200).send({ response: "Product deleted successfully" });
    } else {
      res
        .status(401)
        .send({ message: "Product id is missing please pass product id" });
    }
  } catch (err) {
    res.status(500).send({ response: "Something went wrong somewhere" });
  }
});




// Mencasual model requests

let casualBrand = [
  "U.S. Polo Assn.",
  "U.S. Polo Assn. Denim Co.",
  "Tommy Hilfiger",
];

menRouter.get("/casual", async (req, res) => {
  let search = req.query.search || "";
  let brand = req.query.brand || casualBrand;
  let discount = req.query.discount || 0;
  let min = req.query.minimum || 0;
  let max = req.query.maximum || 15000;
  let sortBy = req.query.sort || 1;
  let limit = req.query.limit || 45;

  try {
    let data = await Mencasual.find({
      $and: [
        { description: { $regex: search, $options: "i" } },
        { discount: { $gte: discount } },
        { price: { $gte: min, $lte: max } },
      ],
    })
      .where("brand")
      .in([...brand])
      .sort({ price: sortBy })
      .limit(limit);
    res.status(200).send({ total: data.length, mencasual: data });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong somewhere" });
  }
});



// Men casual PRODUCT ADD reques
menRouter.post("/casual/create", async (req, res) => {
  let product = req.body;
  let check = Object.keys(product);
  try {
    if (check > 0) {
      let newProduct = new Mencasual(product);
      await newProduct.save();
      res.status(200).send({ response: "Product added successfully" });
    } else {
      res.status(401).send({ response: "Please pass product data" });
    }
  } catch (err) {
    res.status(500).send({ response: "Something went wrong somewhere" });
  }
});

// Men casual UPDATE reques
menRouter.patch("/casual/update/:casualId", async (req, res) => {
  try {
    if (req.params.casualId) {
      if (req.body) {
        let { casualId } = req.params;
        let updatedData = req.body;
        await Mencasual.findByIdAndUpdate({ _id: casualId }, updatedData);
        res.status(200).send({ response: "Product data is updated successfully" });
      } else {
        res.status(401).send({ response: "Update data is missing !!!" });
      }
    } else {
      res
        .status(401)
        .send({ message: "Product id is missing please pass product id" });
    }
  } catch (err) {
    res.status(500).send({ response: "Something went wrong somewhere" });
  }
});
// Men casual DELETE reques
menRouter.delete("/casual/delete/:casualId", async (req, res) => {
  try {
    if (req.params.casualId) {
      let { casualId } = req.params;
      await Mencasual.findByIdAndDelete({ _id: casualId });
      res.status(200).send({ response: "Product deleted successfully" });
    } else {
      res
        .status(401)
        .send({ message: "Product id is missing please pass product id" });
    }
  } catch (err) {
    res.status(500).send({ response: "Something went wrong somewhere" });
  }
});


















module.exports = { menRouter };
