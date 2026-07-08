const verifyAdmin = (req, res, next) => {

    if (req.user.rol !== "admin") {

        return res.status(403).json({
            success: false,
            message: "Acceso denegado. Solo administradores."
        });

    }

    next();

};

module.exports = {
    verifyAdmin
};