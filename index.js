// Express Server 
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT || 5001;

// Init Server
const app = express();

//Enable Cors
app.use(cors());

// Parse incomeing JSON
app.use(express.json());

// Uses the querystring library
app.use(express.urlencoded({ extended: false}));

// express.static middleware 
// https://expressjs.com/en/starter/static-files.html
// app.use(express.static(path.join(__dirname, 'client')));

// Connect routes to server - CALL
// Ex. localhost:5001/openai/generateimage 
app.use('/openai', require('./routes/openaiRoutes'));


// Listen for server and callback when up and print to console
app.listen(port, ()=> console.log(`Server started on port ${port}`));
