var express = require("express"),
	ejs = require("ejs"),
	//path = require ("path"),
	app = express();

//express has a a much of configuration that you can change or leaving the default
// what the view engine does is set a template
app.set("view engine", "ejs");


app.get("/", function(req,res){
	// res.render is displaying our view with the route
	res.render("home");
});

app.get("/login", function(req, res){
	res.render("login");
});

app.get("/signup", function(req, res){
	res.render("signup");
});

app.listen(8080, function(){
	console.log("server is running");
});
