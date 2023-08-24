const db = require('../../../models')//requerir los modelos
const {Router} = require('express')//requerir el router
const router = new Router()

router.get('/',(req,res)=>{
    console.log("get ruta principal")
    res.send({Tittle:"Saludos Adso"})
})


router.post('/new',async(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone;

    try{
        await db.User.create({
            name,
            email,
            password,
            phone
        });
        res.status(200).send({status:"OK",message:"User created"})
    }catch(error)
    {
        res.status(400).send('User could not be created')
    }
})

router.get('/all',async(req,res)=>{
    try{

        let users = await db.User.findAll();
        res.status(200).send({status:'Ok',message:"Users Listed",data:users});
    }catch(error)
    {
        res.status(400).send({status:'fail',message:"Users Error",data:null})
    }
})


router.get('/:id',async(req,res)=>{
    try{

        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send({status:'Ok',message:"Users Catched",data:users});
    }catch(error)
    {
        res.status(400).send({status:'fail',message:"User Error",data:null})
    }
})


router.put('/:id',async(req,res)=>{
    try{

        let id = req.params.id;
        let {name,email,password} = req.body;
         await db.User.update(
            {name,email,password},
            {
                where:{
                    id,
                }
            }
         );
        res.status(200).send("Usuario Actualizado");
    }catch(error)
    {
        res.status(400).send({status:'fail',message:"Error Updating",})
    }
})



router.delete('/:id',async(req,res)=>{
    try{

        let id = req.params.id;
         await db.User.destroy({
            where:{
                id,
            }
         }

         );
        res.status(200).send("Usuario Elimindao correctamente");
    }catch(error)
    {
        res.status(400).send({status:'fail',message:"Error Deleting"})
    }
})






module.exports = router