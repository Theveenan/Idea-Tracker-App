const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ideaSchema = new Schema({
    username: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
    
    }
}, {
    timestamps: true,
});

const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;