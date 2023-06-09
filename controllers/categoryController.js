const { category } = require("../models");

const categoryController = {};

//Function for Treatment creation

categoryController.createCategory = async (req, res) => {

    try {
        const { name, highlight, brand } = req.body;

        const newCategory = {
            
            name : name,
            highlight : highlight,
            brand : brand
        }
           // Guardar la informacion
        const categoryCreate = await category.create(newCategory)

        return res.json(categoryCreate)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

categoryController.getAllCategory = async (req, res) => {

    try{
    let allCategory = await category.findAll(
        {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })

    if (!allCategory){
        return res.send("Category Not Found")
    }

    return res.json(allCategory);

}catch(error){
    return res.status(500).send(error.message)
}   
                    
}

module.exports = categoryController