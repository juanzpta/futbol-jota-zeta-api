const db = require("../config/db");

// Obtener todos los productos
const getAllProducts = (callback) => {

    const sql = "SELECT * FROM productos";

    db.query(sql, (error, resultados) => {

        if (error) {
            return callback(error, null);
        }

        callback(null, resultados);

    });

};

// Obtener un producto por ID
const getProductById = (id, callback) => {

    const sql = "SELECT * FROM productos WHERE id = ?";

    db.query(sql, [id], (error, resultados) => {

        if (error) {
            return callback(error, null);
        }

        callback(null, resultados[0]);

    });

};
// Crear producto
const createProduct = (producto, callback) => {

    const sql = `
        INSERT INTO productos
        (nombre, descripcion, precio, stock, categoria, imagen)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            producto.nombre,
            producto.descripcion,
            producto.precio,
            producto.stock,
            producto.categoria,
            producto.imagen
        ],
        (error, resultado) => {

            if (error) {
                return callback(error, null);
            }

            callback(null, {
                id: resultado.insertId,
                ...producto
            });

        }
    );

};
// Actualizar producto
const updateProduct = (id, producto, callback) => {

    const sql = `
        UPDATE productos
        SET nombre = ?,
            descripcion = ?,
            precio = ?,
            stock = ?,
            categoria = ?,
            imagen = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            producto.nombre,
            producto.descripcion,
            producto.precio,
            producto.stock,
            producto.categoria,
            producto.imagen,
            id
        ],
        (error, resultado) => {

            if (error) {
                return callback(error, null);
            }

            callback(null, resultado);

        }
    );

};
// Eliminar producto
const deleteProduct = (id, callback) => {

    const sql = "DELETE FROM productos WHERE id = ?";

    db.query(sql, [id], (error, resultado) => {

        if (error) {
            return callback(error, null);
        }

        callback(null, resultado);

    });

};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};