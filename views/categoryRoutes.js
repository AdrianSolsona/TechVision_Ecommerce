const categoryController = require("../controllers/categoryController");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Appointment
router.post("/categories", verifyToken,categoryController.createCategory)
router.get("/categories", verifyToken,categoryController.getCategory)

module.exports = router