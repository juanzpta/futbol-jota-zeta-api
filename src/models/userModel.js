const db = require("../config/db");

// Crear usuario
const createUser = (usuario, callback) => {

    const sql = `
        INSERT INTO usuarios
        (nombre, email, password, rol)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            usuario.nombre,
            usuario.email,
            usuario.password,
            usuario.rol
        ],
        (error, resultado) => {

            if (error) {
                return callback(error, null);
            }

            callback(null, {
                id: resultado.insertId,
                ...usuario
            });

        }
    );

};
// Buscar usuario por email
const getUserByEmail = (email, callback) => {

    const sql = "SELECT * FROM usuarios WHERE email = ?";

    db.query(sql, [email], (error, resultados) => {

        if (error) {
            return callback(error, null);
        }

        callback(null, resultados[0]);

    });

};
module.exports = {
    createUser,
    getUserByEmail
};