// 1. installing dependencies - express, uuid, express
const express = require('express');
const uuid = require('uuid'); //uuid used for assigning a unique identifier 
const router = express.Router();
let data = require('../db/db.json');

// getting the json data
router.get('/', (req, res) => res.json(data));

// posting the data from json file 
router.post('/', (req, res) => {
    // saving the newly entered note tile and text into constants
    const noteTitle = req.body.title;
    const noteText = req.body.text;
    // every note given a new id and saving to json
    const note = {
        // assigning a random id to the newly added note using uuid
        id: uuid.v4(),
        title: noteTitle,
        text: noteText
    };
    // pushing the final note to json
    data.push(note);
    res.json(data);
});

module.exports = router;