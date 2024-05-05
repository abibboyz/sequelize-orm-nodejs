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
    console.log("I am here");
    res.status(201).json({
        
        message: "Post Created Successfully",
        post: result
    });
}).catch(error=>{
    console.log("I am here catch")
    res.status(500).json({
        message: "Internal Server error",
        post: error
    });
});
}

module.exports ={
     save: save
}