// 1. install required dependencies - file system (fs), path, express
const fs = require('fs');
const path = require('path');
const express = require('express');
const routeTo = express.Router();

// route to the notes.html file
routeTo.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', `notes.html`));
});

// route to the index.html file
routeTo.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', `index.html`));
});

// exporting the modules 
module.exports = routeTo;