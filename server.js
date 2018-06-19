const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of json
app.use(bodyParser.json())

// database configuration
const dbConfig = require('./config/database_config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connecting to the database
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// simple get
app.get('/', (req, res) => {
    res.json({"message": "Hello there!"});
});


//loading routes
require('./app/routes/orderRoute.js') (app);



// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
