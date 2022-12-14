const mongoose = require("mongoose");

const mencasualSchema = mongoose.Schema({});

const Mencasual = mongoose.model("menscausal", mencasualSchema);

module.exports = Mencasual;
