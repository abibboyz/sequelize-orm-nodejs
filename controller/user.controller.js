const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res) {

    models.User.findOne({where: {email: req.body.email}}).then(result =>{
        if(result){
            res.status(409).json({
                message: "Email already exists"
            })
        }
        else{
            bcryptjs.genSalt(10, function(err, salt) {
                if (err) {
                    return res.status(500).json({ message: "Error generating salt" });
                }
                bcryptjs.hash(req.body.password, salt, function(err, hash) {
                    if (err) {
                        return res.status(500).json({ message: "Error hashing password" });
                    }
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash // Store the hashed password
                    };
                    models.User.create(user)
                        .then(result => {
                            res.status(201).json({
                                message: "User is successfully created",                
                            });
                        })
                        .catch(error => {
                            res.status(500).json({
                                message: "Error creating user",
                                error: error
                            });
                        });
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "something went wrong",
            error: error
        });
    });
}

function login(req, res){
    models.User.findOne({where: {email: req.body.email}}).then(user =>{
        if(user == null){
            res.status(401).json({
                message: "Invalid Credential"
            });
        }
        else{
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, 'secret', function(err, token){
                        res.status(200).json({
                            message: "Authentication Successful",
                            token: token
                        })
                    });
                }
                else{
                    res.status(401).json({
                        message: "Invalid Credential"
                    });

                }
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "something went wrong",
            error: error
        });
    });
}

module.exports = {
    signUp: signUp,
    login: login
};
