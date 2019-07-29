const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MOVIE_MONGODB_URI || "mongodb://localhost/Movie-Night"


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/api-routes')(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

mongoose.connect(process.env.MOVIE_MONGODB_URI || "mongodb://localhost/Movie-Night");

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + MONGODB_URI);


});

app.listen(PORT, () => {
    console.log(` server listening on port ${PORT}`);
});


