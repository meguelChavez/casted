const axios = require('axios')

module.exports = async (movie, cb) => {

    const searchTerm = movie.split(" ").join("+")
    console.log(searchTerm)
    console.log("omdb api")
    const URL = `http://www.omdbapi.com/?t=${searchTerm}&apikey=${process.env.OMDB_API_KEY}`
    console.log(URL)
    try {
        const movieData = await axios.get(URL)
        cb(movieData.data)
        return movieData.data
    } catch (err) {
        console.log(err)

    }
}