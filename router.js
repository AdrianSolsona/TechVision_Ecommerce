const router = require('express').Router();


const userRoutes = require("./views/userRoutes")
const orderRoutes = require("./views/orderRoutes")
const addressRoutes = require("./views/addressRoutes")
const categoryRoutes = require("./views/categoryRoutes")
const rolRoutes = require("./views/rolRoutes")
const productRoutes = require("./views/productRoutes")
const buyRoutes = require("./views/buyRoutes")



router.use('/',userRoutes)
router.use('/',orderRoutes);
router.use('/',addressRoutes)
router.use('/',categoryRoutes)
router.use('/',rolRoutes)
router.use('/',productRoutes)
router.use('/',buyRoutes)




module.exports = router;