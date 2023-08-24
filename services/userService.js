const db = require('../models')

const getAllUsers= async()=>{
    try{

        let users = await db.User.findAll();
        return users

    }catch(error)
    {
        return error.message || 'Failed to get users'
    }
}


const getUser= async(id)=>{
    try{

        let user = await db.User.findByPk(id);
        return user

    }catch(error)
    {
        throw {status:500,message: error.message || "Failed to get user"};
    }
};



const createUser= async(name,email,password,phone)=>{
    try{

        const newUser = await db.User.create({
            name,
            email,
            password,
            phone
        });

        return newUser

    }catch(error)
    {
        return error.message || 'User could not be created';
    }
} 


const updateUser= async(id,name,email,password)=>{
    try{

        const updateUser = await db.User.update(
            {   name,
                email,
                password
            },{
                where:{
                    id,
                }
            }   
            );
        return updateUser;

    }catch(error)
    {
        return error.message || 'User could not be updated'
    }
} 


const deleteUser= async(id)=>{
    try{

        const deleteUser = await db.User.destroy(
            {
                where:{
                    id,
                }
            }
            
            );
        return deleteUser

    }catch(error)
    {
        return error.message || 'User could not be deleted'
    }
} 


module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}