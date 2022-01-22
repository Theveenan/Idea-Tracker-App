const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ideaSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    }
}, {
    timestamps: true,
});

 const User = mongoose.model('Idea', ideaSchema);

module.exports = User;