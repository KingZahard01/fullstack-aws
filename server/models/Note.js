// Modelo de datos para las notas

// importamos DataTypes de Sequelize para definir los tipos de datos de las columnas de la tabla
const { DataTypes } = require("sequelize");
// Importamos la conexion a la base de datos
const sequelize = require("../db/db.js");

// Creamos un modelo de datos para las notas
const Note = sequelize.define("Note", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Exportamos el modelo de datos para usarlo en otros archivos
module.exports = Note;
