
const { product, category } = require("../models");


const productController = {};

//Function for Treatment creation

productController.createProduct = async (req, res) => {

    try {
        const {category_id,name,price,description,render,image,status} = req.body;

        const newProduct = {
            category_id : category_id,
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

productController.putProduct = async (req, res) =>{

    try{

        const productId = req.params.id

        const {category_id,name,price,description,render,image,status} = req.body;

        const updateProduct = await product.update({
            
            category_id : category_id,
            name : name,
            price : price,
            description : description,
            render: render,
            image : image,
            status: status }, {where:{id:productId}})

        return res.json(updateProduct)

    }catch(error){

        return res.status(500).send(error.message)
    }
}

productController.deleteProduct = async (req, res) => {

    try{

        const productId = req.params.id
    
        const deleteProduct = await product.destroy({where: { id: productId}})

        return res.json(deleteProduct);

    }catch(error){

        return res.status(500).send(error.message)
    }
};

module.exports =  productController