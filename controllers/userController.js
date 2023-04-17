const { User, Rol, Address } = require("../models");
const bcrypt = require("bcrypt");

const userController = {};

//Function for user creation

userController.createUser = async (req,res) => {

    try{
        
        const { email, password } = req.body;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create({
        password : encryptedPassword,
        email : email,
        rol_id: 2
        })


        return res.json(
            {
                success: true,
                message: "User registered",
                data: newUser
            })

    }catch (error){

        return res.status(500).send(error.message)
    }
};


userController.getAllUsers = async (req, res) => {

    try{
    let userActives = await User.findAll(
        {
            include: [
                Address,
                {
                    model: Address,
                    attributes: {
                        exclude: ["id","user_id", "createdAt", "updatedAt"]
                    },
                },
            ],
            attributes: {
                exclude: ["rol_id", "password", "createdAt", "updatedAt"]
            }
        })

    if (!userActives){
        return res.send("User Not Found")
    }

    return res.json(userActives);

}catch(error){
    return res.status(500).send(error.message)
}   
                    
}   
//Function to display the user by user id

userController.getUser = async (req, res) => {

    try{

        const userId = req.userId;

        const user = await User.findByPk(userId,
            {
                include: [
                    Rol,
                    {
                        model: Rol,
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        },
                    },
                ],
                attributes: {
                    exclude: ["rol_id", "password", "createdAt", "updatedAt"]
                }
            })

        if (!user){
            return res.send("User Not Found")
        }

        return res.json(user);
    
    }catch(error){
        return res.status(500).send(error.message)
    }   
};

userController.putUser = async (req, res) =>{

    try{

        const userId = req.userId;

        const { 
            password,
            email  
        } = req.body;
            
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateUser = await User.update({
            encryptedPassword,
            email
            }, {where:{id:userId}})

        return res.json(updateUser)

    }catch(error){

        return res.status(500).send(error.message)
    }
};


module.exports =  userController
