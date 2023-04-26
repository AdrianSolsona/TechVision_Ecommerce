
const { Address } = require("../models");
const bcrypt = require("bcrypt");

const addressController = {};

//Function for address creation

addressController.createAddress = async (req, res) => {

    try {
        const { name, surname, phone,address, country, city, postcode } = req.body;

        const newAddressId = req.userId;

        const newAddress = {
            user_id: newAddressId,
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

addressController.getAddress = async (req, res) => {

    try{

        const addressId = req.userId;

        const address = await Address.findAll(
            {
                where: 
                {
                    user_id: addressId
                },
                attributes: {
                    exclude: [ "user_id", "createdAt", "updatedAt"]
                }
            })

        if (!address){
            return res.send("User Not Found")
        }

        return res.json(address);
    
    }catch(error){
        return res.status(500).send(error.message)
    }   
};

addressController.getAddressAll = async (req, res) => {

    try{
    let AddressAll = await Address.findAll(
        {
            attributes: {
                exclude: ["user_id", "createdAt", "updatedAt"]
            }
        })

    if (!AddressAll){
        return res.send("User Not Found")
    }

    return res.json(AddressAll);

}catch(error){
    return res.status(500).send(error.message)
}
}
/*
addressController.putAddress = async (req, res) =>{

    try{
    
        const addressId = req.addressId
    
        const { name, surname, phone,address, country, city, postcode } = req.body;
    
        const updateAddress = await Address.update({
            name : name,
            surname : surname,
            address : address,
            phone : phone,
            country: country,
            city : city,
            postcode : postcode}, {where:{id:addressId}})
    
        return res.json(updateAddress)
    
    }catch(error){
    
        return res.status(500).send(error.message)
    }
    };
*/
/*
addressController.putAddress = async (req, res) => {
    try {
      const addressId = req.params.addressId; // Se utiliza params para obtener el ID de la dirección a actualizar
      const userId = req.user.id; // Se obtiene el ID del usuario autenticado a través del token
  
      const { name, surname, phone, address, country, city, postcode } = req.body;
  
      // Se busca la dirección a actualizar verificando que pertenece al usuario autenticado
      const foundAddress = await Address.findOne({
        where: { id: addressId, userId: userId },
      });
  
      if (!foundAddress) {
        return res.status(404).json({ message: "Address not found" });
      }
  
      // Se actualiza la información de la dirección
      const updatedAddress = await foundAddress.update({
        name: name,
        surname: surname,
        address: address,
        phone: phone,
        country: country,
        city: city,
        postcode: postcode,
      });
  
      return res.json(updatedAddress);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };*/


    addressController.putAddress = async (req, res) =>{

    try{

        const addressId = req.params.id

        const {name,surname, phone, address, country, city, postcode} = req.body;

        const updateAddress = await Address.update({
            name: name,
            surname: surname,
            address: address,
            phone: phone,
            country: country,
            city: city,
            postcode: postcode,}, {where:{id:addressId}})

        return res.json(updateAddress)

    }catch(error){

        return res.status(500).send(error.message)
    }
}

addressController.deleteAddress = async (req, res) => {

    try{

        const addressId = req.params.id
    
        const deleteAddress = await Address.destroy({where: { id: addressId}})

        return res.json(deleteAddress);

    }catch(error){

        return res.status(500).send(error.message)
    }
};
  
  

module.exports = addressController