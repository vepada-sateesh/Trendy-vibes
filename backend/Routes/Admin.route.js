// const express = require("express");
// const { AdminModel } = require("../Models/Admin.model");
// const adminRouter = express.Router();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// adminRouter.post("/signup", async (req, res) => {
//   const { email, password } = req.body;
//   const userPresent = await AdminModel.findOne({ email });
//   if (userPresent?.email) {
//     res.send("Try loggin in, already exist");
//   } else {
//     try {
//       bcrypt.hash(password, 4, async function (err, hash) {
//         const user = new AdminModel({ email, password: hash });
//         await user.save();
//         res.send("Sign up successfull");
//       });
//     } catch (err) {
//       console.log(err);
//       res.send("Something went wrong, pls try again later");
//     }
//   }
// });

// adminRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await AdminModel.find({ email });

//     if (user.length > 0) {
//       const hashed_password = user[0].password;
//       bcrypt.compare(password, hashed_password, function (err, result) {
//         if (result) {
//           const token = jwt.sign({ userID: user[0]._id }, "hush");
//           res.send({ msg: "Login successfull", token: token });
//         } else {
//           res.send("Login failed");
//         }
//       });
//     } else {
//       res.send("Login failed");
//     }
//   } catch {
//     res.send("Something went wrong, please try again later");
//   }
// });

// module.exports = { adminRouter };



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
