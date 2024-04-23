function index(req, res){
    const posts = 'Post List';
    res.send(posts);
}

module.exports ={
     index: index
}