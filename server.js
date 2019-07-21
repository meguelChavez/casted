const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3003;
const mongoURI = process.env.MONGODB_URI_Dev || process.env.MONGODB_URI

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
});

// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/public/index.html'));
// });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}



// const Schema = mongoose.Schema;

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to mongo')
        // const doc = mongoose.model('Titles', new Schema({}));
        // console.log(doc)
        // doc.find({ "TitleName": "Cavalcade" }, function (err, collection) {
        //     console.log('find')
        //     console.log(collection)
        // });

    })
    .catch(err => console.log(err));


require('./routes/api-routes')(app);


app.listen(PORT, () => {
    console.log(` server listening on port ${PORT}`);
});
