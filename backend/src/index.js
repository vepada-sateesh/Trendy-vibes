require("dotenv").config();
const cors = require("cors");
const express = require("express");
require("express-async-errors");
const bodyParser = require("body-parser");

const { connection } = require("../config/database");
const { productRouter } = require("../Routes/Product.route");
const router = require("../Routes/Admin.route");

const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/product", productRouter);

app.use(bodyParser.json());
app.use("/admin", router);

app.get("/", (req, res) => {
  res.send("Welcome...");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connect To DB Successfully");
  } catch (err) {
    console.log(err);
    res.send(404).json({ msg: "Something went wrong " });
  }
  console.log(`Listing on port ${PORT}`);
});
