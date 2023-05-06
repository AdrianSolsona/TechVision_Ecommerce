const buyController = require("../controllers/buyController");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Appointment
router.post("/buys",verifyToken, buyController.addToCart)
router.get("/buys", verifyToken,buyController.getBuyInfo)
router.get("/buys/cart", verifyToken,buyController.getCart)
/*router.put("/buys", verifyToken,buyController.putBuy)*/
router.delete("/buys/:productId", verifyToken,buyController.deleteCart)
router.get("/buys/info", verifyToken,buyController.getAllInfoCart)


/*module.exports = router*/
module.exports = router