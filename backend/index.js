const express = require("express");
require("dotenv").config();
const cors = require("cors");
const {Auth} = require("./middlewares/Authonticate")
const {connection} = require("./config/database");
const {userRouter} = require("./routes/user.route");


const menRouter = require("./routes/men.route");


const app = express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send({message:"welcome to trendy vibes testing Homepage API"})
})


app.use("/user",userRouter);
app.use(Auth)

server.use("/men",menRouter);



app.listen(process.env.PORT, async()=>{

    try {
        await connection
        console.log("db is connected successfully");
    }
    catch(err){
         console.log("db is connected successfully");
         console.log(err);

    }

    console.log(`Server is listning on http://localhost:${process.env.PORT}`);
})