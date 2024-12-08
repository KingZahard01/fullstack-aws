// Logica del controlador

// Importamos el modelo de datos
const Note = require("../models/Note.js");

// Funcion para obtener todas las notas
const getAllNotes = async (req, res) => {
  try {
    // Obtenemos todas las notas
    const notes = await Note.findAll();
    // Enviamos las notas como respuesta al cliente
    res.status(200).json(notes);
  } catch (error) {
    // En caso de error, enviamos un mensaje de error
    res.status(500).json({ error: error.message });
  }
};

// Funcion para obtener una nota por ID
const getNoteById = async (req, res) => {
  try {
    // Buscamos la nota por su ID en la base de datos
    const note = await Note.findByPk(req.params.id);
    // Enviamos la nota como respuesta al cliente
    res.status(200).json(note);
  } catch (error) {
    // En caso de error, enviamos un mensaje de error
    res.status(500).json({ error: error.message });
  }
};

// Funcion para crear una nueva nota
const createNote = async (req, res) => {
  try {
    // Creamos una nueva nota con los datos del cuerpo de la solicitud
    const { title, content } = req.body;
    // Guardamos la nota en la base de datos
    const newNote = await Note.create({ title, content });
    // Enviamos la nueva nota como respuesta al cliente
    res.status(201).json(newNote);
  } catch (error) {
    // En caso de error, enviamos un mensaje de error
    res.status(500).json({ error: error.message });
  }
};

// Funcion para actualizar una nota
const updateNote = async (req, res) => {
  try {
    // Actualizamos la nota con los datos del cuerpo de la solicitud
    await Note.update(req.body, { where: { id: req.params.id } });
    // Enviamos un mensaje de confirmacion
    res.status(200).json({ message: "Nota actualizada correctamente" });
  } catch (error) {
    // En caso de error, enviamos un mensaje de error
    res.status(500).json({ error: error.message });
  }
};

// Funcion para eliminar una nota
const deleteNote = async (req, res) => {
  try {
    // Eliminamos la nota de la base de datos
    await Note.destroy({ where: { id: req.params.id } });
    // Enviamos un mensaje de confirmacion
    res.status(200).json({ message: "Nota eliminada correctamente" });
  } catch (error) {
    // En caso de error, enviamos un mensaje de error
    res.status(500).json({ error: error.message });
  }
};

// Exportamos las funciones del controlador para usarlas en otros archivos
module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
