const express = require("express");
require("./database/connection")
const app = express();
const port = process.env.PORT || 8000;
const studentrouter = require('./routers/users');

app.use(express.json());

app.use(studentrouter);


app.listen(port, ()=>{
    console.log(`set at ${port}.`);
})


