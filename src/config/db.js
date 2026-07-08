const mysql = require("mysql2");

// Crear conexión
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Paulpogba12*",
    database: "futbol_jota_zeta"
});

// Conectar
connection.connect((error) => {

    if (error) {
        console.log("❌ Error de conexión:", error);
        return;
    }

    console.log("✅ Base de datos conectada correctamente");

});

module.exports = connection;