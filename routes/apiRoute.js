const router = require("express").Router();

router.get("/notes", (req, res) => res.json(notePad));

module.exports = router;