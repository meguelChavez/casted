const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({ any: {} });


const Movies = mongoose.model('Movies', MovieSchema);

module.exports = Movies;