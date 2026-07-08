const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../models/productModel");

// Obtener todos los productos
const getProducts = (req, res) => {

    getAllProducts((error, productos) => {

        if (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener los productos"
            });
        }

        res.status(200).json({
            success: true,
            data: productos
        });

    });

};

// Obtener un producto por ID
const getProduct = (req, res) => {

    const id = req.params.id;

    getProductById(id, (error, producto) => {

        if (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener el producto"
            });
        }

        if (!producto) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: producto
        });

    });

};
// Crear producto
const createNewProduct = (req, res) => {

    const {
        nombre,
        descripcion,
        precio,
        stock,
        categoria,
        imagen
    } = req.body;

    createProduct(
        {
            nombre,
            descripcion,
            precio,
            stock,
            categoria,
            imagen
        },
        (error, producto) => {

            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error al crear el producto"
                });
            }

            res.status(201).json({
                success: true,
                message: "Producto creado correctamente",
                data: producto
            });

        }
    );

};
// Actualizar producto
const updateExistingProduct = (req, res) => {

    const id = req.params.id;

    const {
        nombre,
        descripcion,
        precio,
        stock,
        categoria,
        imagen
    } = req.body;

    updateProduct(
        id,
        {
            nombre,
            descripcion,
            precio,
            stock,
            categoria,
            imagen
        },
        (error, resultado) => {

            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error al actualizar el producto"
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Producto no encontrado"
                });
            }

            res.json({
                success: true,
                message: "Producto actualizado correctamente"
            });

        }
    );

};
// Eliminar producto
const deleteExistingProduct = (req, res) => {

    const id = req.params.id;

    deleteProduct(id, (error, resultado) => {

        if (error) {
            return res.status(500).json({
                success: false,
                message: "Error al eliminar el producto"
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            message: "Producto eliminado correctamente"
        });

    });

};

module.exports = {
    getProducts,
    getProduct,
    createNewProduct,
    updateExistingProduct,
    deleteExistingProduct
};