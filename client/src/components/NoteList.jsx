// Componente para listar todas las notas

import React, { useState, useEffect } from "react";
import Note from "./Note.jsx";
import { getNotes, deleteNote } from "../api.jsx";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await getNotes();
    setNotes(response.data);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NoteList;
