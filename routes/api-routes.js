// const db = require('../models');
const mongojs = require("mongojs");
const OMDB = require('../Utils/OmdbAPI')
// const movieDB = require("../models")


module.exports = (app) => {


    const databaseUrl = process.env.MONGODB_URI;
    const collections = ["Titles"];

    // Use mongojs to hook the database to the db variable
    const db = mongojs(databaseUrl, collections);

    // This makes sure that any errors are logged if mongodb runs into an issue
    db.on("error", function (error) {
        console.log("Database Error:", error);
    });


    // Save existing collection of docs from read only db to  
    // second db with read/write access
    // db.Titles.find({}, (err, data) => {
    //     console.log(data)
    //     if (err) {
    //         console.log(err)
    //     }

    //     movieDB.Movies.create(data)
    //         .then((data) => {
    //             console.log(data)
    //         }).catch(function (err) {
    //             console.log(err);
    //         })
    // })

    app.get('/api/titles', (req, res) => {
        const { searchBy, searchInput } = req.query
        const searchKey = searchBy || 'TitleName'
        const response = {}
        OMDB(searchInput, (data) => {
            response.omdbData = data
            db.Titles.find({ [searchKey]: searchInput }, (err, titleData) => {
                response.data = titleData
                console.log(response)
                if (err) {
                    console.log(err)
                    response.err = err
                    res.json(response)
                }
                console.log("data")
                if (titleData.length > 0) {
                    response.message = 'found results'
                    response.searchSuccess = true
                    response.status = 200
                    // movieDB.Movies.find({ TitleName: searchInput }).then((movieObj) => {
                    //     if (movieObj.length === 0) {
                    //         movieDB.Movies.create(data).then((movieData) => {
                    //             console.log(movieData)
                    //         })
                    //     }
                    // })

                    res.json(response)
                } else if (data.Response.toLowerCase() === 'false' || data.Response === false) {
                    // movieDB.Movies.find({ Title: searchInput }).then((movieObj) => {
                    //     if (movieObj.length === 0) {
                    //         movieDB.Movies.create(data).then((movieData) => {
                    //             console.log(movieData)
                    //         })
                    //     }
                    // })
                    response.message = 'no results found'
                    response.searchSuccess = false
                    response.status = 404
                    res.json(response)
                } else {
                    response.searchSuccess = true
                    response.status = 200
                    res.json(response)
                }
            })
        })

    })
}