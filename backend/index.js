const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("express-async-errors");
const bodyParser = require("body-parser");

const { Auth } = require("./middlewares/Authonticate");
const { connection } = require("./config/database");
const { productRouter } = require("../Routes/Product.route");
v;
const { userRouter } = require("./routes/user.route");
const { menRouter } = require("./routes/men.route");
const router = require("../Routes/Admin.route");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .send({ message: "welcome to trendy vibes testing Homepage API" });
});

app.use("/user", userRouter);
app.use(Auth);

app.use("/men", menRouter);

app.use("/product", productRouter);

app.use(bodyParser.json());
app.use("/admin", router);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db is connected successfully");
  } catch (err) {
    console.log("db is connected successfully");
    console.log(err);
  }

  console.log(`Server is listning on http://localhost:${process.env.PORT}`);
});
