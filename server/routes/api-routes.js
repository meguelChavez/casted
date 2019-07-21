// const db = require('../models');
const mongoose = require('mongoose')
const mongojs = require("mongojs");

const Schema = mongoose.Schema;

module.exports = (app) => {

    const databaseUrl = process.env.MONGODB_URI_Dev;
    const collections = [process.env.Collection];

    // Use mongojs to hook the database to the db variable
    const db = mongojs(databaseUrl, collections);

    // This makes sure that any errors are logged if mongodb runs into an issue
    db.on("error", function (error) {
        console.log("Database Error:", error);
    });


    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/api/titles', (req, res) => {
        console.log('titles route')
        const { searchBy, searchInput } = req.query
        console.log(searchBy)
        console.log(searchInput)
        db.Titles.find({ [searchBy]: searchInput }, (err, data) => {
            if (err) {
                console.log(err)
                res.json({ err: err })
            }
            console.log("data")
            if (data.length > 0) {
                res.json(data)
            } else {
                res.json({ msg: 'No Results Found' })
            }
        })

    })



}