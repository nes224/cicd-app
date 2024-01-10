const express = require("express");
const app = express();

app.get('/api/get', (req,res) => {
    res.send({message: "Hello back to nodejs little brother tew."})
})

app.listen(5000, () => {
    console.log("Listening to 5000");
})