const asyncHandler = require("express-async-handler");
const Note = require("../models/note_model");

const createNote = asyncHandler(async (req, res) => {
    try {
        let newNote = new Note(req.body);
        const save = await newNote.save();
        res.send(save);
    } catch (error) {
        res.send(error).status(403);
    }
})
const fetchNote = asyncHandler(async (req, res) => {
    try {
        const note = await Note.find()
        if (note) {
            res.send(note)
        } else {
            res.send({ message: "No notes found" }).status(401);
        }
    } catch (error) {
        res.send(error).status(401);
    }
})
const updateNote = asyncHandler(async (req, res) => {
    const { _id, body, title } = req.body;
    try {
        let note = await Note.findByIdAndUpdate({ _id: _id }, {
            title: title,
            body: body,
        }, {
            new: true,
        })
        const save = await note.save();
    } catch (error) {
        res.send(error).status(401);
    }
})
const deleteNote = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    try {
        let note = await Note.findByIdAndDelete({ _id: _id })
        if (note) {
            res.send({ message: "deleted" }).status(200);
        } else {
            res.send({ message: "deleted" }).status(401);
        }
    } catch (error) {
        res.send(error).status(401);
    }
})

module.exports = {
    createNote,
    fetchNote,
    updateNote,
    deleteNote,
}