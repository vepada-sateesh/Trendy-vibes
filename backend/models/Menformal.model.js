const mongoose = require("mongoose");

const menformalSchema = mongoose.Schema({});

const Menformal = mongoose.model("mensformal", menformalSchema);

module.exports = Menformal;
