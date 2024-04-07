const express = require("express");
const products = require("./products.json")
const app = express();

app.get("/" , (req, res) => {
    res.send(products);
})

app.listen(3006, ()=>{
    console.log("Server is running at http://localhost:3006");
})