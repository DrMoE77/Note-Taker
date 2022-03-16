// Installing dependancies
const express =require("express");
const fs = require("fs");
const path = require("path")

// Setting up express
const app = express ()
const port = process.env.port||8000


app.use(express.json())
// Serve the asset files in the public folder
app.use(express.static(path.join(__dirname,"public")))

//connecting to the api route and html routes files
app.use("/api/notes",require("./apiroutes"))
app.use("/",require("./htmlroutes"))


// Listening to the port
app.listen(port,()=>console.log("listening to port " + port));