const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  // email: "admin@gmail.com",
  // password: "admin@1998",
  email: String,
  password: String,
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };
