const Articleservice = require('../services/articleService');

const getAllArticles = async(req,res)=>{


    try{

        const AllArticles = await Articleservice.getAllArticles();
        res.status(200).send({status:"ok",data:AllArticles})

    }catch(error){
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }

};



const getArticle = async(req,res)=>{

    try{
        let id = req.params.articleId;
        const Article = await Articleservice.getArticle(id);
        res.status(200).send({status:"ok",data:Article})

    }catch(error){
        res.status(error.status || 500).send({status:"failed",data:{error:error.message}});
    }

};


const createArticle = async(req,res)=>{

    try{

        const {body} = req;
        const createArticle = await Articleservice.createArticle(body.tittle,body.content,body.userId);
        res.status(200).send({status:"ok",data:createArticle})

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




