const router = require('express').Router();
const path = require('path');
const { nanoid } = require('nanoid');
const notesArr = require('../../db/db.json');
const { createNewNote } = require("../../lib/notes");

router.get('/notes', (req, res) => {
    let results = notesArr;
    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = nanoid();

    const notes = createNewNote(req.body, notesArr);
    res.json(notes);
});

module.exports = router;