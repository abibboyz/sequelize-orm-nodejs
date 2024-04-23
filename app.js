const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");

});

app.get('/blog', (req, res) => {
    res.send("Hello Blog");

});

module.exports = app;