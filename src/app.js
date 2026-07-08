require("./config/db");
const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Bienvenido a la API de Fútbol Jota Zeta",
    version: "1.0.0"
  });
});

// Rutas de productos
app.use("/api/productos", productRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;