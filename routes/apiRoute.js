const router = require("express").Router();
let notePad = require("../db/db.json");
const fs = require("fs")
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => res.send(notePad));

router.post("/notes", (req, res) => {

  let iD = uuidv4();
  let newNote = {
    id: iD,
    title: req.body.title,
    text: req.body.text,
  };

  fs.readFile("../note-taker/db/db.json", "utf8", (err, data) =>{
    if (err) {
      throw (err)
    }
    const existingNotes = JSON.parse(data)

    existingNotes.push(newNote)
  })

  fs.writeFile("../note-pad/db/db.json", JSON.stringify(notePad), (err) => {
    if (err) {
      throw (err)
    };
  })
  res.send(existingNotes)
});

module.exports = router;