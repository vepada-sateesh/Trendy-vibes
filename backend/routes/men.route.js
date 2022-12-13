const express = require("express");

const menRouter = express.Router();

menRouter.get("/tshirt", (req, res) => {});

menRouter.get("/formal", (req, res) => {});

menRouter.get("/casual", (req, res) => {});

module.exports = menRouter;
