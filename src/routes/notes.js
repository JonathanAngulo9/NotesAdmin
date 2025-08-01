const express = require('express');
const router = express.Router();

let notes = [];

router.get('/', (req, res) => {
  res.json(notes);
});

router.post('/', (req, res) => {
  const { content } = req.body;
  const newNote = { id: Date.now(), content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

module.exports = router;
