const express = require("express");
const PORT = 3000;
const app = express ();
app.use(express.static("public"));
app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/public/views/index.html")});

app.get("/about", (req,res) => {
    res.sendFile(__dirname + "/public/views/about.html");
})
app.get("/home", (req,res) => {
    res.sendFile(__dirname + "/public/views/home.html");
})

app.listen(PORT,()=> {
    console.log(PORT);
});