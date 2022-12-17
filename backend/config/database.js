const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect("mongodb+srv://Malviyajay:masai@cluster0.7xg3wkz.mongodb.net/NEM_111_PROJECT?retryWrites=true&w=majority");

module.exports = { connection };
