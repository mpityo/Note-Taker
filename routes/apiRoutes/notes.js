const router = require('express').Router();
const path = require('path');
const { nanoid } = require('nanoid');
const notesArr = require('../../db/db.json');
const { createNewNote, deleteNote } = require("../../lib/notes");

router.get('/notes', (req, res) => {
    res.json(notesArr);
});

router.post('/notes', (req, res) => {
    req.body.id = nanoid();

    const notes = createNewNote(req.body, notesArr);
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    const notes = deleteNote(req.params.id, notesArr);
    res.json(notes);
});

module.exports = router;