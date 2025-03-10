import React from 'react';
import './App.css'; 
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';

const App = () => {
  return (
    <div>
      <h1 className="app-title">Note App</h1>
      <NoteEditor />
      <NoteList />
    </div>
  );
};

export default App;

