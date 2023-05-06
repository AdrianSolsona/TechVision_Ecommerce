const { order, User } = require("../models");


const orderController = {};

//Function for Treatment creation

orderController.createOrder = async (req, res) => {

    try {
        const { user_id, total, status, date } = req.body;

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

orderController.getAllOrder = async (req, res) => {

    try{
    let orderActives = await order.findAll(
        {
            include: [
                User,
                {
                    model: User,
                    attributes: {
                        exclude: ["id","rol_id", "password", "createdAt", "updatedAt"]
                    },
                },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })

    if (!orderActives){
        return res.send("User Not Found")
    }

    return res.json(orderActives);

}catch(error){
    return res.status(500).send(error.message)
}   
                    
}


orderController.getOrder = async (req, res) => {

    try{

        const orderId = req.userId;

        const orderById = await order.findAll(
            {
                where: 
                {
                    user_id: orderId
                },
                include: [
                    User,
                    {
                        model: User,
                        attributes: {
                            exclude: ["id","rol_id", "password", "createdAt", "updatedAt"]
                        },
                    },
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })

        if (!orderById){
            return res.send("User Not Found")
        }

        return res.json(orderById);
    
    }catch(error){
        return res.status(500).send(error.message)
    }   
};

orderController.putOrder = async (req, res) =>{

    try{

        const orderId = req.params.id

        const {total,status,date} = req.body;

        const updateOrder = await order.update({
            
            total : total,
            status : status,
            date : date, }, {where:{id:orderId}})

        return res.json(updateOrder)

    }catch(error){

        return res.status(500).send(error.message)
    }
}

orderController.deleteOrder = async (req, res) => {

    try{

        const orderId = req.params.id
    
        const deleteOrder = await order.destroy({where: { id: orderId}})

        return res.json(deleteOrder);

    }catch(error){

        return res.status(500).send(error.message)
    }
};

orderController.updateOrderStatus = async (req, res) => {
    try {
      const orderId = req.params.id;
  
      const updatedOrder = await order.update(
        { status: "complete" },
        { where: { id: orderId } }
      );
  
      res.status(200).json(updatedOrder);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error updating order status");
    }
  };




module.exports = orderController