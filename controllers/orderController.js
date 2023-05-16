const { order, User, product, buy } = require("../models");


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
    /*
    try{

        const orderId = req.params.id

        const {status} = req.body;

        const updateOrder = await order.update({
            status: status}, {where:{id:orderId}})

        return res.json(updateOrder)

    }catch(error){

        return res.status(500).send(error.message)
    }*/
    
    try {
        const orderId = req.params.id;
        const updateOrder = await order.update({ status: "complete" }, { where: { id: orderId } });
    
        return res.json(updateOrder);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    /*
    try {
        const  orderId  = req.params.id;
    
        // Buscar la orden por su ID
        const existingOrder = await order.findAll({where: { id: orderId}});
    
        if (!existingOrder) {
          return res.status(404).json({ message: 'Orden no encontrada' });
        }
    
        // Actualizar el estado de la orden
    await order.update({ status: 'complete' }, { where: { id } });

    // Obtener la orden actualizada
    const updatedOrder = await order.findByPk(id);

    return res.json(updatedOrder);
      } catch (error) {
        return res.status(500).send(error.message);
      }*/
  };

  orderController.createOrderBuy = async (req, res) => {
    try {
      
      const { userId, products } = req.body;
      const date = new Date();
      const status = 'pending';
      // Calculo el total sumando los precios de los productos
      const total = products.reduce((sum, prod) => sum + prod.price, 0);
  
      // Creo la nueva orden
      const newOrder = await order.create({
        user_id: userId,
        date,
        status,
        total
      });
  
      // Guardar la nueva orden en la base de datos
      const orderId = newOrder.id;
  
      // Asocio los productos a la orden
      await Promise.all(products.map(async (prod) => {
        await buy.create({
          product_id: prod.id,
          order_id: orderId,
          amount: 1
        });
      }));
  
      res.status(200).json({ message: 'Order created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating order' });
    }
  };


module.exports = orderController