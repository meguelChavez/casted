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

require('./routes/api-routes')(app);


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


app.listen(PORT, () => {
    console.log(` server listening on port ${PORT}`);
});
