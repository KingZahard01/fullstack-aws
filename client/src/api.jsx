// Archivo para la conexion con el backend

// Importamos axios para realizar solicitudes HTTP a la API del backend local
import axios from "axios";
// Creamos una instancia de axios con la URL base de la API
const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Exportamos las funciones para realizar las solicitudes HTTP
export const getNotes = () => api.get("/blogs");
export const getNoteById = (id) => api.get(`/blogs/${id}`);
export const createNote = (note) => api.post("/blogs", note);
export const updateNote = (id, note) => api.put(`/blogs/${id}`, note);
export const deleteNote = (id) => api.delete(`/blogs/${id}`);
