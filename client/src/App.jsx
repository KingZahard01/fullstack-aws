import { useState } from "react";
import NotesList from "./components/NoteList.jsx";
import NoteForm from "./components/NoteForm.jsx";
import "./css/App.css";

function App() {
  const [currentNote, setCurrentNote] = useState(null);

  const handleEdit = (note) => {
    setCurrentNote(note);
  };

  const handleSave = () => {
    setCurrentNote(null);
  };

  return (
    <>
      <div className="App">
        <NoteForm currentNote={currentNote} onSave={handleSave} />
        <NotesList onEdit={handleEdit} />
      </div>
    </>
  );
}

export default App;
