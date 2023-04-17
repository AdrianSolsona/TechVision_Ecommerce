const orderController = require("../controllers/orderController");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();

// All available routes for the model User
router.post("/orders", orderController.createOrder)
router.get("/orders/all", verifyToken,orderController.getAllOrder)
//router.get("/orders", verifyToken,orderController.getOrder)
//router.put("/orders", verifyToken,orderController.putOrder)
//router.delete("/orders", verifyToken, orderController.deleteOrder)*/

module.exports = router