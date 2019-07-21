const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const mongoURI = process.env.MONGODB_URI || process.env.MONGODB_URI_Dev

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}



mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('connected to mongo'))
    .catch(err => console.log(err));


require('./routes/api-routes')(app);

app.listen(PORT, () => {
    console.log(` server listening on port ${PORT}`);
});
