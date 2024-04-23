const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello world");

// });

// app.get('/blog', (req, res) => {
//     res.send("Hello Blog");

// });
//Use Router to make request here
const postRoute = require('./routes/posts');


app.use("/posts", postRoute);


module.exports = app;