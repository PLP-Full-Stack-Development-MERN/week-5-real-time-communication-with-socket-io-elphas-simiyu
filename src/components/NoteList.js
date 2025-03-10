import React, { useState, useEffect } from 'react';
import socket from '../hooks/useSocket';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    socket.on('updateNote', (note) => {
      setNotes((prevNotes) => [...prevNotes, note]);
    });
  }, []);

  return (
    <ul>
      {notes.map((note) => (
        <li key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

