const express = require("express");
const router = new express.Router();
const { createNote, fetchNote, updateNote ,deleteNote } = require("../controller/note_controller")

router.route("/").post(createNote).get(fetchNote);
router.route("/update").put(updateNote);
router.route("/delete").delete(deleteNote);

module.exports = router;
