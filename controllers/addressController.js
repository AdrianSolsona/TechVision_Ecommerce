
const { Address } = require("../models");
const bcrypt = require("bcrypt");

const addressController = {};

//Function for address creation

addressController.createAddress = async (req, res) => {

    try {
        const { user_id,name, surname, phone,address, country, city, postcode } = req.body;

        const newAddress = {
            user_id: user_id,
            name : name,
            surname : surname,
            address : address,
            phone : phone,
            country: country,
            city : city,
            postcode : postcode,
    
        }
           // Guardar la informacion
        const addressCreate = await Address.create(newAddress)

        return res.json(addressCreate)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

module.exports = addressController