const addressController = require("../controllers/addressController");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();

// All available routes for the model User
router.post("/address",addressController.createAddress)
router.get("/address", verifyToken,addressController.getAddress)
router.put("/address/:id", verifyToken,addressController.putAddress)
router.delete("/address/:id", verifyToken, addressController.deleteAddress)

module.exports = router