
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

const mongoose = require("mongoose");

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL || "admin@example.com",
  password: process.env.ADMIN_PASSWORD || "admin",
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || "admin-bro",
  cookiePassword:
    process.env.ADMIN_COOKIE_PASS ||
    "supersecret-and-long-password-for-a-cookie-in-the-browser",
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;




// require("dotenv").config();
// const cors = require("cors");
// const express = require("express");
// require("express-async-errors");
// const bodyParser = require("body-parser");

// const { connection } = require("../config/database");
// const { productRouter } = require("../Routes/Product.route");
// const router = require("../Routes/Admin.route");

// const PORT = process.env.PORT;
// const app = express();

// app.use(
//   cors({
//     origin: "*",
//   })
// );
// app.use(express.json());

// app.use("/product", productRouter);

// app.use(bodyParser.json());
// app.use("/admin", router);

// app.get("/", (req, res) => {
//   res.send("Welcome...");
// });

// app.listen(PORT, async () => {
//   try {
//     await connection;
//     console.log("Connect To DB Successfully");
//   } catch (err) {
//     console.log(err);
//     res.send(404).json({ msg: "Something went wrong " });
//   }
//   console.log(`Listing on port ${PORT}`);
// });
