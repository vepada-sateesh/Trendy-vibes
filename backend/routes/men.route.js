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
  let brand = req.query.brand || tshirtBrand;
  let discount = req.query.discount || 0;
  if (req.query.brand) {
    brand = JSON.parse(brand);
  }

  try {
    let data = await Mentshirt.find({$and:[{discount : {$gte:discount}}]})
      .where("brand")
      .in([...brand]);

    res.status(200).send({ total: data.length, mentshirt: data });
  } catch (err) {
    res.send({ message: "Something went wrong somewhere" });
    console.log(err);
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
  let brand = req.query.brand || formalBrand;
  let discount = req.query.discount || 0;
  console.log(typeof discount);
  if (req.query.brand) {
    brand = JSON.parse(brand);
  }
  if(req.query.discount){
    discount = Number(discount);
  }
  try {
    let data = await Menformal.find()
      .where("brand")
      .in([...brand]);
    res.status(200).send({ total: data.length, menformal: data });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong somewhere" });
  }
});

// Mencasual model requests

let casualBrand = [
  "U.S. Polo Assn.",
  "U.S. Polo Assn. Denim Co.",
  "Tommy Hilfiger",
];

menRouter.get("/casual", async (req, res) => {
  let brand = req.query.brand || casualBrand;
  let discount = req.query.discount || 0;
  if (req.query.brand) {
    brand = JSON.parse(brand);
  }
  try {
    let data = await Mencasual.find()
      .where("brand")
      .in([...brand]);
    res.status(200).send({ total:data.length,mencasual: data });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong somewhere" });
  }
});

module.exports = { menRouter };
