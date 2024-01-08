const express = require("express");
const app = express();

app.get('/api/get', (req,res) => {
    res.send({message: "Hello back to nodejs"})
})

app.listen(8000, () => {
    console.log("Listening to 8000");
})