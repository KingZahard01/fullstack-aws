// Rutas relacionadas con las notas

// Importamos Express y el enrutador
const express = require("express");
const router = express.Router();

// Importamos las funciones del controlador
const {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController.js");

// Definimos las rutas relacionadas con las notas
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

// Exportamos el enrutador
module.exports = router;
