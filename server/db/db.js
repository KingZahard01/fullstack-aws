// Configuracion de la conexion a la base de datos

// Importamos Sequelize para configurar la conexion
const { Sequelize } = require("sequelize");
// importamos dotenv para acceder a las variables de entorno
require("dotenv").config();

// Creamos una instancia de Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Intentamos conectar a la base de datos
sequelize
  .authenticate()
  .then(() => console.log("Conexion exitosa a la base de datos"))
  .catch((err) => console.log(`No se pudo conectar: ${err}`));

// Exportamos la instancia de Sequelize para usarla en otros archivos
module.exports = sequelize;
