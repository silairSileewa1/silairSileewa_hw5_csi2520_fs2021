const express = require("express");
const ejs = require("ejs");


const app = new express();

//initialize bosy parser middlware
app.use(express.json());
app.use(express.urlencoded({ extended: true})); //parse html


//initialize ejs middleware
app.set("viewengine", "ejs");
app.set('/views', __dirname + '/views');
app.use("/public", express.static(__dirname + "/public"));
app.use("/views", express.static(__dirname + "/views"));

//routes
app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.get("/", (req, res) =>{
    res.render("blog.html");
});

app.get("/", (req, res) =>{
    res.render("my_fun_facts.html");
});
app.get("/", (req, res) =>{
    res.render("my_resume.html");
});
app.get("/", (req, res) =>{
    res.render("trivia.html");
});




//server pots
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log('Server is running on PORT NO $PORT ')});