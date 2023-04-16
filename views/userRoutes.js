const userController = require("../controllers/userController");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();

// All available routes for the model User
router.post("/users",userController.createUser)
router.get("/users/all", verifyToken,userController.getAllUsers)
router.get("/users", verifyToken,userController.getUser)
router.put("/users", verifyToken,userController.putUser)

module.exports = router