const addressController = require("../controllers/addressController");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();

// All available routes for the model User
router.post("/address",addressController.createAddress)
router.get("/address/all", verifyToken,addressController.getAddress)
router.get("/address", verifyToken,addressController.getAddress)
router.put("/address", verifyToken,addressController.putAddress)
router.delete("/address", verifyToken, addressController.deleteAddress)

module.exports = router