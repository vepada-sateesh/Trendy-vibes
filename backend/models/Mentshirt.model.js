const mongoose = require("mongoose");


const mentshirtSchema = mongoose.Schema({});


const Mentshirt = mongoose.model("menstshirt",mentshirtSchema);

module.exports = Mentshirt;