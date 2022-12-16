const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connection = require("./config/database");
const userRouter = require("./routes/user.route");

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send({ message: "Sephora Homepage API" });
});

server.use("/user", userRouter);

server.listen(process.env.PORT, async () => {
  try {
    console.log("db is connected successfully");
  } catch (err) {
    console.log("db is connected successfully");
    console.log(err);
  }

  console.log(`Server is listning on http://localhost:${process.env.PORT}`);
});
