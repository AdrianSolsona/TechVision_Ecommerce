
const { product, category } = require("../models");


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

productController.getAllProducts = async (req, res) => {

    try{
    let productActives = await product.findAll(
        {
            include: [
                category,
                {
                    model: category,
                    attributes: {
                        exclude: ["id", "createdAt", "updatedAt"]
                    },
                },
            ],
            attributes: {
                exclude: ["category_id", "createdAt", "updatedAt"]
            }
        })

    if (!productActives){
        return res.send("User Not Found")
    }

    return res.json(productActives);

}catch(error){
    return res.status(500).send(error.message)
}
}
module.exports =  productController