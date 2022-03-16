// 1. install dependencies
// 2. get the note
// 3. post the note 
// 4. delete the note
// 5. export the router

//installing the required dependancies 
const fs = require("fs")
const express =require("express")
const id = require ("uuid")
const route=express.Router()
const app = express ()

// To get the note 
let note = require("../db/db.json")
route.get("/", (req, res)=>res.json(note))

route.post("/", (req, res)=>{
    const newNoteTitle  = req.body.title
    const newNoteText = req.body.text
   const newJSONnote = {
        id:id.v4(),
        title:newNoteTitle,
        text:newNoteText
   }
    
   note.push(newJSONnote)
    res.json(note)

    
});

// deleting a note 
route.delete("/:id", (req, res)=>{
    const noted = note.some(obj=>obj.id===req.params.id)


    
    res.json(note)
});

// Exporting the route file
module.exports=route