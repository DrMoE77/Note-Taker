// installing dependencies - express, path
const express = require('express');
const path = require('path');

// initialiazing the express modules
const app = express();

// loading the json file and the necessary routing files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/notes', require('./routes/apiroutes'));
app.use('/', require('./routes/htmlroutes'));

// starting the server at port 8000
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});