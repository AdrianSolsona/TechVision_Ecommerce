const orderController = require("../controllers/orderController");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();

// All available routes for the model User
router.post("/orders", orderController.createOrder)
router.get("/orders/all", verifyToken,orderController.getAllOrder)
router.get("/orders", verifyToken,orderController.getOrder)
router.put("/orders/:id", verifyToken,orderController.putOrder)
router.delete("/orders/:id", verifyToken, orderController.deleteOrder)
router.put("/orders/buys/:id", verifyToken,orderController.updateOrderStatus)
router.post("/orders/create", verifyToken,orderController.createOrderBuy)
module.exports = router