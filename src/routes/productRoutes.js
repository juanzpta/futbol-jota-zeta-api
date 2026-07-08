const express = require("express");
const router = express.Router();

const {
    getProducts,
    getProduct,
    createNewProduct,
    updateExistingProduct,
    deleteExistingProduct
} = require("../controllers/productController");

const { verifyToken } = require("../middleware/authMiddleware");
const { verifyAdmin } = require("../middleware/roleMiddleware");

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", verifyToken, verifyAdmin, createNewProduct);

router.put("/:id", verifyToken, verifyAdmin, updateExistingProduct);

router.delete("/:id", verifyToken, verifyAdmin, deleteExistingProduct);

module.exports = router;