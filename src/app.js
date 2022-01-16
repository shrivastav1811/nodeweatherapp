const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 5000;

// add public static path 
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


// handlebar template engine using, through views folder
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));



// routing 
app.get("/", (req , res) => {
    // res.send("welcome to first project of express");
    res.render("index");
});

app.get("/about", (req , res) => {
    // res.send("welcome to first about page project of express");
    res.render("about");
});

app.get("/weather", (req , res) => {
    // res.send("welcome to first weather page project of express");
    res.render("weather");
});


// 404 error page code 
app.get("*", (req , res) => {
    // res.send(" Error page 404 oops! not found  project of express");
    res.render("404error", {
        errorMsg : "Oops ! page not found"
    });
});


app.listen(port, ()=> {
    console.log(`listening to the port no. ${port}`);
});
