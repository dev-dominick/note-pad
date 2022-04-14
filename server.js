const express = require("express");
const path = require("path");
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");
const notePad = require("./db/db.json");

const router = require("express").Router();
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", apiRoute);
app.use("/", htmlRoute);

// app.get("/", (req, res) => {
//   res.send(path.join("./public/index.html"));
// });

// app.get("/", (req, res) => {
//   res.send(path.join("./public/notes.html"));
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = notePad;

//make route for get req for /notes notes.html 
//and get req * for index.html

//api routes get /api/notes should read db.json and will return saved notes
//   post /api/notes should receive new note to save on the req body





// GIVEN a note-taking application

// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page


// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column


// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page


// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes


// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column


// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column