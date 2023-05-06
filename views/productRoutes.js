const productController = require("../controllers/productController");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Appointment
router.post("/products", verifyToken,productController.createProduct)
router.get("/products/all",productController.getAllProducts)
router.get("/products/:id", productController.getProduct)
router.put("/products/:id", verifyToken,productController.putProduct)
router.delete("/products/:id", verifyToken,productController.deleteProduct)

module.exports = router