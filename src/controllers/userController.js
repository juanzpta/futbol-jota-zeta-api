const bcrypt = require("bcrypt");

const {
    createUser,
    getUserByEmail
} = require("../models/userModel");

const jwt = require("jsonwebtoken");

// Registrar usuario
const registerUser = async (req, res) => {

    try {

        const {
            nombre,
            email,
            password,
            rol
        } = req.body;

        // Validaciones básicas
        if (!nombre || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Nombre, email y contraseña son obligatorios"
            });
        }

        // Encriptar contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        createUser(
            {
                nombre,
                email,
                password: hashedPassword,
                rol: rol || "cliente"
            },
            (error, usuario) => {

                if (error) {
                    return res.status(500).json({
                        success: false,
                        message: "Error al registrar el usuario"
                    });
                }

                res.status(201).json({
                    success: true,
                    message: "Usuario registrado correctamente",
                    data: {
                        id: usuario.id,
                        nombre: usuario.nombre,
                        email: usuario.email,
                        rol: usuario.rol
                    }
                });

            }
        );

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        });

    }

};
// Login de usuario
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email y contraseña son obligatorios"
            });
        }

        getUserByEmail(email, async (error, usuario) => {

            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error del servidor"
                });
            }

            if (!usuario) {
                return res.status(404).json({
                    success: false,
                    message: "Usuario no encontrado"
                });
            }

            const passwordCorrecta = await bcrypt.compare(
                password,
                usuario.password
            );

            if (!passwordCorrecta) {
                return res.status(401).json({
                    success: false,
                    message: "Contraseña incorrecta"
                });
            }
const token = jwt.sign(
    {
        id: usuario.id,
        email: usuario.email,
        rol: usuario.rol
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "2h"
    }
);
            res.status(200).json({
    success: true,
    message: "Login correcto",
    token,
    data: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
    }
});

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Error interno"
        });

    }

};

module.exports = {
    registerUser,
    loginUser
};