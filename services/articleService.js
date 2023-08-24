const db = require('../models');

const getAllArticles = async ()=> {
    try{

        let Articles = await db.Article.findAll({

            include:{
                model: db.User,
                required: true,
                as: "User",
                attributes:["id","name","email"],
            },
        });
        return Articles;

    }catch(error){
        return error.message || "Failed to get Articles";
    }
}


const getArticle = async (id)=> {
    try{

        let Article = await db.Article.findByPk(id);
        return Article;

    }catch(error){
        throw{status:500,message:error.message || "Failed to get article"};
    }
};


const createArticle = async (tittle,content,userId)=> {
    try{

        let NewArticle = await db.Article.create({
            tittle,
            content,
            userId
        });
        return NewArticle;

    }catch(error){
      return error.message || "Article could not be created"
    }
};


const updateArticle = async (id,title,content,idUser) =>{
    try{

        let updateArticle =  await db.Article.update({
            tittle,
            content,
            idUser
        },{
            where:{
                id,
            }
        });
        return updateArticle

    }catch(error){
        return error.message || "Article could not be updated"
    }
}


const deleteArticle = async (id) =>{
    try{

        const deletedArticle =  await db.Article.destroy({

            where:{
                id,
            }
        });
        return deletedArticle;

    }catch(error){
        return error.message || "Article could not be deleted"
    }
}


module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,

}
