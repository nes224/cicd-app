const express = require("express");
const app = express();

app.get('/api/get', (req,res) => {
    res.send({message: "Hello back to nodejs"})
})

app.listen(5000, () => {
    console.log("Listening to 5000");
})