const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comments: {
        type: String,
        required: "You must include a comment"
    },
    userName: {
        type: String,
        required: "You must include a User Name"
    },
    movieName: {
        type: String,
        required: "You must include a Park"
    },
    movieId: {
        type: String,
        required: "You must include a ParkId"
    }
}, {
        timestamps: {
            type: Date
        }
    });

const Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;