const express = require("express");

const app = express();

app.get("/" , (req, res) => {
    res.send("Hello, World!");
})

app.listen(3006, ()=>{
    console.log("Server is running at http://localhost:3006");
})