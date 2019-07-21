const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const mongoURI = process.env.MONGODB_URI_Dev || process.env.MONGODB_URI


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

mongoose.connect(process.env.MONGODB_URI || mongoURI);


require('./routes/api-routes')(app);

app.listen(PORT, () => {
    console.log(` server listening on port ${PORT}`);
});
