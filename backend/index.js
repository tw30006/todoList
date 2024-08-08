const express = require("express");

const app = express();

app.get('/', function(req, res){
    res.send('hello world!')
});

const port = 6000;
app.listen(port, () => {
    console.log(`server is listening`)
});