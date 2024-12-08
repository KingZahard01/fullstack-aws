// Componente para mostrar una nota

import React from "react";

const Note = ({ note, onDelete, onEdit }) => (
  <div className="note">
    <h3>{note.title}</h3>
    <p>{note.content}</p>
    <button onClick={() => onEdit(note)}>Editar</button>
    <button onClick={() => onDelete(note.id)}>Eliminar</button>
  </div>
);

export default Note;
