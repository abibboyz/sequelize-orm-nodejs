const { where } = require('sequelize');
const models = require('../models');

function save(req, res){
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId,
        userId: 1
    }

models.Post.create(post).then(result=>{
    res.status(201).json({
        
        message: "Post Created Successfully",
        post: result
    });
}).catch(error=>{
    res.status(500).json({
        message: "Internal Server error",
        post: error
    });
});
}

function show(req,res){
    const id = req.params.id;
    models.Post.findByPk(id).then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json({
            message: "Something went wrong"
        })
    });
}

function index(req,res){
    models.Post.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json({
            message: "Something went Wrong"
        })
    });
}

function update(req,res){
    const id = req.params.id;
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId
    }
    const userId = 1;
    models.Post.update(updatedPost, {where: {
        id: id, userId: userId
    }}).then(result =>{
        res.status(200).json({
            message: "Post updated Successfully",
            post: updatedPost
        })
    }).catch(error =>{
        res.status(500).json({
            message: "Something went Wrong",
            error: error
    })
    });
}

function destroy(req, res){
    const id = req.params.id;
    const userId = 0;
    models.Post.destroy({where: {id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Post deleted Successfully"
        })
       
    }).catch(error=>{
        res.status(500).json({
            message: "Something went Wrong",
            error: error
    });
});
}
module.exports ={
     save: save,
     show: show,
     index, index,
     update: update,
     destroy: destroy
}