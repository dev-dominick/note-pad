const router = require("express").Router();

router.get("/api/notes", (req, res) => res.json(notePad));

router.post("/api/notes"), (req, res) => req.json(notePad)

module.exports = router;