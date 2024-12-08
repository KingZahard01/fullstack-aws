// Configuracion de la aplicacion Express

// Importamos Express
const express = require("express");
// Importamos cors para permitir solicitudes de origen cruzado (CORS)
const cors = require("cors");
// Importamos dotenv para acceder a las variables de entorno
require("dotenv").config();
// Importamos las rutas relacionadas con las notas
const notesRoutes = require("./routes/notesRoutes.js");
// Importamos la conexion a la base de datos
const sequelize = require("./db/db.js");

// Creamos una instancia de Express
const app = express();
// Configuramos el puerto
const PORT = process.env.PORT || 3000;

// Middleware

// Usamos cors() para permitir solicitudes de origen cruzado (CORS)
app.use(cors());
// Usamos express.json() para parsear el cuerpo de las solicitudes
app.use(express.json());

// Rutas relacionadas con las notas
app.use("/blogs", notesRoutes);

// Iniciar el servidor y sincronizar la base de datos
sequelize.sync({ force: false }).then(() => {
  // Iniciamos el servidor
  app.listen(PORT, () => {
    // Imprimimos un mensaje indicando que el servidor esta corriendo
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
