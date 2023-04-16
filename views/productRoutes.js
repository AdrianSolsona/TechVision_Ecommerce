const productController = require("../controllers/productController");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Appointment
router.post("/products", verifyToken,productController.createProduct)
router.get("/products/all", verifyToken,productController.getAllProducts)
router.get("/products", verifyToken,productController.getProduct)
router.put("/products", verifyToken,productController.putProduct)
router.delete("/products", verifyToken,productController.deletProduct)


module.exports = router