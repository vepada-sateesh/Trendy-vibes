const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGO_URL);

<<<<<<< HEAD
module.exports = { connection };
=======
module.exports = {connection};
>>>>>>> 4d711bbc25ee90be7b429820371e0859501ff37a
