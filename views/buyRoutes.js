const buyController = require("../controllers/buyController");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Appointment
router.post("/buys", verifyToken,buyController.createBuy)
router.get("/buys", verifyToken,buyController.getBuy)
router.put("/buys", verifyToken,buyController.putBuy)
router.delete("/buys", verifyToken,buyController.deleteBuy)

module.exports = router