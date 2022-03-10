const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArr) {
  const notes = body;  
  notesArr.push(notes);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesArr, null, 2)
    );
    
    return notes;
}

function deleteNote(id, notesArr) {
  const notes = notesArr.filter(element => element.id != id);

  fs.writeFileSync(path.join(__dirname, '../db/db.json'),
      JSON.stringify(notes, null, 2)
    );

  return notes;
}

module.exports = { createNewNote, deleteNote };