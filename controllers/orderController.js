const { order } = require("../models");


const orderController = {};

//Function for Treatment creation

orderController.createOrder = async (req, res) => {

    try {
        const { user_id, total, date, status } = req.body;

        const newOrder = {
            user_id: user_id,
            total : total,
            status : status,
            date : date,
            
    
        }
           // Guardar la informacion
        const orderCreate = await order.create(newOrder)

        return res.json(orderCreate)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

module.exports = orderController