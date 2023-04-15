const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    isImportant: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;