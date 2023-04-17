
const { product } = require("../models");


const productController = {};

//Function for Treatment creation

productController.createProduct = async (req, res) => {

    try {
        const {name,price,description,render,image,status} = req.body;

        const newProduct = {
            name : name,
            price : price,
            description : description,
            render: render,
            image : image,
            status: status
    
        }
           // Guardar la informacion
        const productCreate = await product.create(newProduct)

        return res.json(productCreate)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

module.exports =  productController