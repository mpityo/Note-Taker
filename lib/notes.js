const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArr) {
    const notes = body;
    notesArr.push(notes);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArr }, null, 2)
    );
    
    return notes;
}

module.exports = { createNewNote };