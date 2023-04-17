const { buy } = require("../models");


const buyController = {};

//Function for Treatment creation

buyController.createBuy = async (req, res) => {

    try {
        const { product_id, order_id, amount } = req.body;

        const newBuy = {
            product_id: product_id,
            order_id: order_id,
            amount: amount
        }
           // Guardar la informacion
        const buyCreate = await buy.create(newBuy)

        return res.json(buyCreate)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

module.exports = buyController