const router = require("express").Router();
let notePad = require("../db/db.json");
const fs = require("fs")
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => res.json(notePad));

router.post("/notes"), (req, res) => {
  req.body.id = uuidv4()
  notePad.push(req.body)
  console.log({notePad});
  fs.writeFile("../db/db.json", JSON.stringify(notePad), (err) => {
    if (err) throw err;
  })
  res.JSON.req.body
};

module.exports = router;