const router = require('express').Router();
const path = require('path');
const { nanoid } = require('nanoid');
const notesArr = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notesArr;
    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = nanoid();

    notesArr.push(req.body);
    res.json(notesArr);
});

module.exports = router;