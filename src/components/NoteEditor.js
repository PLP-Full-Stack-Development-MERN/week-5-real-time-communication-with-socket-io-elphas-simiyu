import React, { useState } from 'react';
import socket from '../hooks/useSocket';

const NoteEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [roomId, setRoomId] = useState('');
  const [error, setError] = useState(null);

  const handleSaveNote = () => {
    socket.emit('updateNote', { title, content, roomId });
  };

  return (
    <div className="note-editor">
      <div className="note-header">
        <input 
          type="text" 
          className="note-title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
        />
        <input 
          type="text" 
          className="note-room" 
          value={roomId} 
          onChange={(e) => setRoomId(e.target.value)} 
          placeholder="Room ID" 
        />
      </div>
      
      <textarea 
        className="note-content" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Content" 
      />

      <button className="save-button" onClick={handleSaveNote}>Save Note</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default NoteEditor;

