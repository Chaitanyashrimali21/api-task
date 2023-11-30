const express = require('express');
const bodyParser = require('body-parser');
const checkEmail = require('./middleware/login');
const app = express();

app.use(bodyParser.json());

app.use(checkEmail);

app.post('/login',checkEmail);

//middleware to check emailvalidation

const port = 3000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
});