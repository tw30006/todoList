const express = require("express");

const app = express();

const router = require('./routes')
app.use('/api', router)

const port = 8000;
app.listen(port, () => {
    console.log(`server is listening`)
});



