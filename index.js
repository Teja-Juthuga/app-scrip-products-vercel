const express = require("express");
const products = require("./products.json")
const app = express();

app.use(cors(
    {
        origin : "*"
    }
));

app.get("/products" , (req, res) => {
    res.send(products);
})

app.listen(3006, ()=>{
    console.log("Server is running at http://localhost:3006");
})