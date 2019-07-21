const axios = require('axios')

module.exports = async (movie, searchBy) => {

    const searchTerm = movie.split(" ").join()
    console.log(searchTerm)
    console.log("omdb api")
    const URL = `http://www.omdbapi.com/?t=${searchTerm}&apikey=${process.env.OMDB_API_KEY}`
    try {
        const movieData = await axios.get(URL)
        console.log(movieData)
        return movieData
    } catch{
        (err) => console.log(err)

    }
}