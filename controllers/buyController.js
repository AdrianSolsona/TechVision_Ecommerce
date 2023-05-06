const { buy, product, order } = require("../models");


const buyController = {};

buyController.addToCart = async (req, res) => {

    /*
    try {
      const { user_id, product_id } = req.body;
  
      // Buscar la última order del usuario
      let lastOrder = await order.findOne({
        where: {
          user_id: user_id,
        },
        order: [['createdAt', 'DESC']],
      });
  
      // Si no hay una última order, crear una nueva
      if (!lastOrder || lastOrder.status === "complete") {
        lastOrder = await order.create({
          user_id: user_id,
          status: "pending",
        });
      }
  
      // Buscar el producto a agregar al carrito
      const productOrder = await product.findByPk(product_id);
  
      // Agregar el producto a la tabla buy
      await buy.create({
        product_id: productOrder.id,
        order_id: lastOrder.id,
        amount: 1,
      });
  
      res.status(200).send("Product added to cart");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error adding product to cart");
    }
  
  */
    try {
      const { user_id, product_id } = req.body;
  
      // Buscar la orden actual del usuario o crear una nueva
      let orderProduct = await order.findOne({
        where: {
          user_id: user_id,
        }
      });
      if (!orderProduct) {
        orderProduct = await order.create({
          user_id: user_id,
          status : "pending",
          date : new Date(),
        });
      }
  
      // Buscar el producto a agregar al carrito
      const productOrder = await product.findByPk(product_id);
  
      // Agregar el producto a la tabla 
      await buy.create({
        product_id: productOrder.id,
        order_id: orderProduct.id,
        amount: 1
      });
  
      res.status(200).send("Product added to cart");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error adding product to cart");
      
    }
  }

  buyController.getCart = async (req, res) => {

    try {
      const userId = req.userId;

      
      const orderBuy = await order.findOne({ where: { user_id: userId } });
  
      if (!orderBuy) {

        // If a record is not found in Patients, I return an error message.
        return res.status(404).json({ message: "No patients were found associated with this user"});
      }
  
      // If I find a record in Patients, I get its pacient_id
      const orderId = orderBuy.id;
  
      const buys = await buy.findAll({
          where: {
              order_id: orderId,
          },
          attributes: {
            exclude: ['id','product_id','order_id','amount', 'createdAt', 'updatedAt'],
          },
          include: [
              {
                  model: product,
                  attributes: ['id', 'category_id', 'name', 'description', 'price', 'status', 'image', 'render'],
              },
          ],
      });

      res.json(buys);
  } catch (error) {
      res.status(500).send(error.message);
  }
 
};

buyController.deleteCart = async (req, res) => {
  try {
    const userId = req.userId;
    const productId = req.params.productId;

    const orderBuy = await order.findOne({ where: { user_id: userId } });

    if (!orderBuy) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    const orderId = orderBuy.id;

    await buy.destroy({
      where: {
        order_id: orderId,
        product_id: productId
      }
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }  


}

buyController.getAllInfoCart = async (req, res) => {
  try {
    const userId = req.userId;

    const orderDetails = await order.findAll({
      where: { user_id: userId },
      include: [
        {
          model: buy,
          attributes: ['amount'],
          include: [
            {
              model: product,
              attributes: ['id', 'category_id', 'name', 'description', 'price', 'status', 'image', 'render']
            }
          ]
        }
      ]
    });

    if (!orderDetails) {
      return res.status(404).json({ message: 'No order found for this user' });
    }

    res.json(orderDetails);
  } catch (error) {
    res.status(500).send(error.message);
  }
};





//Function for Treatment creation
/*
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

const { Compra, Producto, Pedido } = require('../models');

exports.agregarProducto = async (req, res) => {
  const { idCompra, idProducto } = req.params;

  try {
    // Buscar la compra correspondiente al id recibido
    const compra = await buy.findByPk(idCompra);

    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }

    // Buscar el producto correspondiente al id recibido
    const producto = await Producto.findByPk(idProducto);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Crear un nuevo registro en la tabla pedido, que contenga el id de la compra y el id del producto
    await Order.create({
      compraId: Compra.id,
      productoId: Producto.id
    });

    // Actualizar la compra con el total de la compra (sumando el precio de todos los productos añadidos)
    const pedidos = await order.findAll({
      where: {
        compraId: Compra.id
      },
      include: [{
        model: product
      }]
    });

    const total = pedidos.reduce((suma, order) => {
      return suma + order.product.price;
    }, 0);

    await buy.update({
      total: total
    });

    res.status(201).json({ message: 'Producto añadido a la compra' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al agregar producto a la compra' });
  }
}

*/

buyController.getBuyInfo = async (req, res) =>{

    try {
        const userId = req.userId;

        
        const orderBuy = await order.findOne({ where: { user_id: userId } });
    
        if (!orderBuy) {

          // If a record is not found in Patients, I return an error message.
          return res.status(404).json({ message: "No patients were found associated with this user"});
        }
    
        // If I find a record in Patients, I get its pacient_id
        const orderId = orderBuy.id;
    
      const buys = await buy.findAll({
        where: {
          order_id: orderId,
        },
        include: [
          product,
          {
            model: product,
            attributes: {
              exclude: ['createdAt', 'updatedAt'],
            },
          },
          {
            model: order,
            attributes: {
              exclude: ['user_id', 'createdAt', 'updatedAt'],
            },
          },
        ],
      });
  
      res.json(buys);
    } catch (error) {
      res.status(500).send(error.message);
    }
};





module.exports = buyController
