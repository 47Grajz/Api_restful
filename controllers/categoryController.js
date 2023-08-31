const Articleservice = require('../services/articleService');

const getAllCategory = async(req,res)=>{


    try{

        const AllCategories = await Articleservice.getAllCategory();
        res.status(200).send({status:"ok",data:AllCategories})

    }catch(error){
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }

};



const getCategory = async(req,res)=>{

    try{
        let id = req.params.categoryId;
        const Category = await Articleservice.getCategory(id);
        res.status(200).send({status:"ok",data:Category})

    }catch(error){
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }

};


const createCategory = async(req,res)=>{

    try{

        const {body} = req;
        const createCategory = await Articleservice.createCategory(body.tittle,body.content,body.userId);
        res.status(200).send({status:"ok",data:createCategory})

    }catch(error){
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }

};



const updateArticle = async(req,res)=>{
    try{
        
        let id = req.params.articleId
        let {title,content,idUser} = req.body;
        const updatedArticle = await Articleservice.updateArticle(id,title,content,idUser);
        res.status(200).send({status:"ok",data:updateArticle})

    }catch(error){
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }

};



const deleteArticle = async(req,res)=>{
    try{

        let id = req.params.articleId;
        const deleteArticle = await Articleservice.deleteArticle(id);
        res.status(200).send({status:"ok",data:deleteArticle})

    }catch(error){
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }

};



module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
};




