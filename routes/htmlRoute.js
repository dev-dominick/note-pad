const router = require("express").Router()
const path = require("path");

router.get("*", (req, res) => {
  res.sendFile(path.join("/public/index.html"))
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join("/public/notes.html"))
});


module.exports = router;