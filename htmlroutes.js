// 1. install required dependencies
// 2. route to the index.html file 
// 3. export the file

//installing the required dependancies 
const fs = require("fs")
const express =require("express");
const path = require ("path");
const route=express.Router()
const app = express ()

//routing to notes.html 
route.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});
// Route to index.html
route.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

// exporting the file 
module.exports=route