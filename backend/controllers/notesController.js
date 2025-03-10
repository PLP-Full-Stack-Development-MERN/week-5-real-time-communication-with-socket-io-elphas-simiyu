const Note = require('../models/note');

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndRemove(req.params.id);
  res.json({ message: 'Note deleted successfully' });
};

