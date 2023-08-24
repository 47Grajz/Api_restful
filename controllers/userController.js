const UserService = require('../services/userService');





const getAllUsers = async(req,res)=>{


    try{
        const allUsers = await UserService.getAllUsers();
        res.status(200).send({status:'Ok',data:allUsers})
    }

    catch(error)
    {
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }


}


const getUser = async(req,res)=>{


    try{
        
    let id = req.params.userId
        const user = await UserService.getUser(id);
        res.status(200).send({status:"ok",data:user})
    }

    catch(error)
    {
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }


}

const createUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const missingFields = [];

        if (!name) missingFields.push('name');
        if (!email) missingFields.push('email');
        if (!phone) missingFields.push('phone');
        if (!password) missingFields.push('password');

        if (missingFields.length > 0) {
            const errorMessage = `Faltan Campos: ${missingFields.join(', ')}`;
            return res.status(400).send({ status: 'failed', data: { error: errorMessage } });
        }

        const CreateUser = await UserService.createUser(name, email, password,phone);
        res.status(201).send({ status: 'Ok', data: CreateUser });
    } catch (error) {
        res.status(error.status || 500).send({ status: 'failed', data: { error: error.message } });
    }
}



const updateUser = async(req,res)=>{


    try{
        const id = req.params.userId
        let {name,email,phone,password} = req.body
        const updateUser = await UserService.updateUser(id,name,email,phone,password);
        res.status(200).send({status:'Ok',data:updateUser});
    }

    catch(error)
    {
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }

}


const deleteUser = async(req,res)=>{


    try{
        const id = req.params.userId
        const deleteUser = await UserService.deleteUser(id);
        res.status(200).send({status:'Ok',data:deleteUser})

    }
    catch(error)
    {
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }


}



module.exports = 
{
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    createUser
}



