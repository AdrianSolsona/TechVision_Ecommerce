const addressController = require("../controllers/addressController");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();

// All available routes for the model User
router.post("/address",verifyToken,addressController.createAddress)
router.get("/address", verifyToken,addressController.getAddress)
router.get("/address/all", verifyToken,addressController.getAddressAll)
router.put("/address/:id", verifyToken,addressController.putAddress)
router.delete("/address/:id", verifyToken, addressController.deleteAddress)

module.exports = router