const express = require("express");

const Mentshirt = require("../models/Mentshirt.model")
const Mencasual = require("../models/Mencasual.model");
const Menformal = require("../models/Menformal.model");

const menRouter = express.Router();


// Mentshirt model requests 
menRouter.get("/tshirt", async(req, res) => {

    try{
        let data = await Mentshirt.find();
        res.status(200).send({mentshirt:data});
    }
    catch(err){
        res.send({message:"Something went wrong somewhere"});
        console.log(err);
    }
    
});



// Menformal model requests 
menRouter.get("/formal", async (req, res) => {
    try{
        let data = await Menformal.find();
        res.status(200).send({ menformal: data });

    }
    catch(err){
        res.status(500).send({message:"Something went wrong somewhere"})
    }
});


// Mencasual model requests 
menRouter.get("/casual", async (req, res) => {
    try{
        let data = await Mencasual.find();
        res.status(200).send({ mencasual: data });

    }
    catch(err){
        res.status(500).send({message:"Something went wrong somewhere"})
    }
});


module.exports = menRouter;
