// Componente para crear/editar notas

import React, { useState, useEffect } from "react";
import { createNote, updateNote } from "../api.jsx";

const NoteForm = ({ currentNote, onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (currentNote) {
      await updateNote(currentNote.id, { title, content });
    } else {
      await createNote({ title, content });
    }
    onSave();
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">{currentNote ? "Actualizar" : "Crear"}</button>
    </form>
  );
};

export default NoteForm;
